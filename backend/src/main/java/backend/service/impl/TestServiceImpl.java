package backend.service.impl;

import backend.converter.TestConverter;
import backend.dto.test.FullTestDto;
import backend.dto.test.TestDto;
import backend.dto.test.TestListDto;
import backend.dto.test.TestUpdateData;
import backend.entity.Test;
import backend.entity.User;
import backend.exception.forbidden.ForbiddenException;
import backend.exception.not_found.TestNotFoundException;
import backend.repository.TestRepository;
import backend.repository.UserRepository;
import backend.security.TokenAuthentication;
import backend.service.TestService;
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

