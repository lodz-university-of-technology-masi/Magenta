package backend.service.impl;

import backend.converter.TestConverter;
import backend.dto.question.QuestionDto;
import backend.dto.question.QuestionListDto;
import backend.dto.test.*;
import backend.entity.Question;
import backend.entity.Test;
import backend.entity.User;
import backend.exception.bad_request.BadTranslationRequest;
import backend.exception.bad_request.UnsupportedQuestionType;
import backend.exception.forbidden.ForbiddenException;
import backend.exception.not_found.TestNotFoundException;
import backend.repository.TestRepository;
import backend.repository.UserRepository;
import backend.security.TokenAuthentication;
import backend.service.QuestionService;
import backend.service.TestService;
import backend.service.UtilsService;
import backend.utils.Constans;
import backend.utils.UserUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static backend.converter.TestConverter.getFullTestDto;
import static backend.converter.TestConverter.getTestDto;
import static java.util.stream.Collectors.toSet;
import static java.util.stream.Stream.of;

@Service
@Transactional(isolation = Isolation.SERIALIZABLE, rollbackFor = Exception.class)
public class TestServiceImpl implements TestService {

    @Autowired
    private TestRepository testRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TokenAuthentication tokenAuthentication;

    @Autowired
    private QuestionService questionService;

    @Autowired
    private UtilsService utilsService;

    @Override
    public TestListDto getAllTests(String authorizationToken) {
        String currentUserName = tokenAuthentication.getUsername(authorizationToken);
        Optional<User> currentUser = userRepository.findByUsernameIgnoreCase(currentUserName);

        List<Test> tests = testRepository.findAll();

        List<Test> testsForUser;

        if (UserUtils.checkUserRole(currentUser.get(), Constans.USER_ROLES.MODERATOR)) {
            testsForUser = tests;
        } else if (UserUtils.checkUserRole(currentUser.get(), Constans.USER_ROLES.REDACTOR)) {
            testsForUser = tests.stream()
                    .filter(item -> item.getOwners().contains(currentUser.get()))
                    .collect(Collectors.toList());
        } else {
            testsForUser = tests.stream()
                    .filter(item -> item.getLanguage().equals(currentUser.get().getLanguage()))
                    .collect(Collectors.toList());
        }

        return TestListDto.builder()
                .tests(TestConverter.getRolesDtoList(testsForUser))
                .build();
    }

    @Override
    public FullTestDto getTest(int id) throws TestNotFoundException {
        return testRepository.findById(id)
                .map(TestConverter::getFullTestDto)
                .orElseThrow(TestNotFoundException::new);
    }

    @Override
    public TestDto addTest(String username, TestDto testDto) {
        Optional<User> user = userRepository.findByUsernameIgnoreCase(username);
        Test test = testRepository.save(TestConverter.getTest(testDto));
        user.ifPresent(u -> test.setOwners(of(u).collect(toSet())));
        return getTestDto(test);
    }

    @Override
    public FullTestDto updateTest(int id, TestUpdateData updateData) throws TestNotFoundException {
        Test test = testRepository.findById(id)
                .orElseThrow(TestNotFoundException::new);
        TestConverter.rewrite(test, updateData);
        testRepository.save(test);
        return getFullTestDto(test);
    }

    @Override
    public FullTestDto translateTest(int id, boolean translateToPolish, String username) throws TestNotFoundException, BadTranslationRequest, UnsupportedQuestionType {
        FullTestDto originalTest = testRepository.findById(id)
                .map(TestConverter::getFullTestDto)
                .orElseThrow(TestNotFoundException::new);

        TestDto translatedTest = addTest(username, createTranslatedTestBody(translateToPolish, originalTest));

        List<QuestionDto> newTestQuestions = new ArrayList<>();
        List<QuestionDto> originalTestQuestions = questionService.getAll(originalTest.getId()).getQuestions();
        originalTestQuestions.forEach(questionDto -> {

            try {
                QuestionDto translatedQuestion = questionDto;
                translatedQuestion.setQuestion(utilsService.getTranslation(questionDto.getQuestion(), translateToPolish));

                if (translatedQuestion.getType().equals(Question.TYPE_VARIANT) && translatedQuestion.getVariants().size() != 0) {
                    translatedQuestion.getVariants().forEach(variant ->
                            {
                                try {
                                    variant.setText(utilsService.getTranslation(questionDto.getQuestion(), translateToPolish));
                                } catch (BadTranslationRequest badTranslationRequest) {
                                    badTranslationRequest.printStackTrace();
                                }
                            }
                    );
                }
                newTestQuestions.add(translatedQuestion);
            } catch (BadTranslationRequest badTranslationRequest) {
                badTranslationRequest.printStackTrace();
            }
        });


        questionService.create(translatedTest.getId(), QuestionListDto.builder().questions(newTestQuestions).build());
        return getTest(translatedTest.getId());
    }

    private TestDto createTranslatedTestBody(boolean translateToPolish, FullTestDto originalTest) throws BadTranslationRequest {
        TestDto translatedTest = new TestDto();
        translatedTest.setId(0);
        translatedTest.setName(utilsService.getTranslation(originalTest.getName(), translateToPolish));
        if (originalTest.getLanguage().equals("pl")) {
            translatedTest.setLanguage("en");
        } else {
            translatedTest.setLanguage("pl");
        }
        return translatedTest;
    }

    @Override
    public void deleteTest(int testId, String authorizationToken) throws ForbiddenException, TestNotFoundException {
        String currentUserName = tokenAuthentication.getUsername(authorizationToken);
        Optional<User> currentUser = userRepository.findByUsernameIgnoreCase(currentUserName);
        Optional<Test> currentTest = testRepository.findById(testId);
        if (currentUser.isPresent() && currentTest.isPresent()) {
            if (UserUtils.checkUserRole(currentUser.get(), Constans.USER_ROLES.MODERATOR) ||
                    (UserUtils.checkUserRole(currentUser.get(), Constans.USER_ROLES.REDACTOR) &&
                            currentTest.get().getOwners().contains(currentUser.get()))) {
                testRepository.deleteById(testId);
            } else {
                throw new ForbiddenException();
            }
        } else {
            throw new TestNotFoundException();
        }
    }
}

