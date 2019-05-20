package backend.service.impl;

import backend.converter.SolutionConverter;
import backend.dto.solution.SolutionDto;
import backend.dto.solution.SolutionDtoWithId;
import backend.dto.solution.SolutionScoreDto;
import backend.dto.solution.SolutionWithIdListDto;
import backend.entity.Test;
import backend.entity.User;
import backend.entity.UserTestSolution;
import backend.exception.not_found.SolutionNotFoundException;
import backend.exception.not_found.TestNotFoundException;
import backend.exception.not_found.UserNotFoundException;
import backend.repository.SolutionRepository;
import backend.repository.TestRepository;
import backend.repository.UserRepository;
import backend.security.TokenAuthentication;
import backend.service.EmailService;
import backend.service.SolutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class SolutionServiceImpl implements SolutionService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TestRepository testRepository;

    @Autowired
    private SolutionRepository solutionRepository;

    @Autowired
    private TokenAuthentication tokenAuthentication;

    @Autowired
    private EmailService emailService;

    @Override
    public SolutionWithIdListDto getAllForRedactor(String authorization) {
        String redactor = tokenAuthentication.getUsername(authorization);

        List<UserTestSolution> solutions =
                solutionRepository.findAll().stream()
                        .filter(item -> isOwner(item, redactor))
                        .collect(Collectors.toList());
        return SolutionWithIdListDto.builder()
                .solutions(SolutionConverter.getSolutionDtosWithId(solutions))
                .build();
    }

    private boolean isOwner(UserTestSolution item, String username) {
        for (User owner :
                item.getTest().getOwners()) {
            if (owner.getUsername().equals(username))
                return true;
        }
        return false;
    }

    @Override
    public SolutionWithIdListDto getAll(String username) {
        List<UserTestSolution> solutions =
                solutionRepository.getAllForUser(username);
        return SolutionWithIdListDto.builder()
                .solutions(SolutionConverter.getSolutionDtosWithId(solutions))
                .build();
    }

    @Override
    public SolutionDtoWithId get(int id) throws SolutionNotFoundException {
        UserTestSolution userTestSolution = solutionRepository.findById(id)
                .orElseThrow(SolutionNotFoundException::new);
        return SolutionConverter.getSolutionDtoWithId(userTestSolution);
    }

    @Override
    public SolutionDtoWithId create(String username, SolutionDto solutionDto) throws UserNotFoundException, TestNotFoundException {
        User user = userRepository.findByUsernameIgnoreCase(username)
                .orElseThrow(UserNotFoundException::new);
        Test test = testRepository.findById(solutionDto.getTestId())
                .orElseThrow(TestNotFoundException::new);

        UserTestSolution solution = UserTestSolution.builder()
                .test(test)
                .user(user)
                .answers(new HashSet<>())
                .build();
        solutionDto.getAnswers().forEach(item -> {
            solution.getAnswers().add(
                    SolutionConverter.getUserAnswer(item, solution)
            );
            solutionRepository.save(solution);
        });
        return SolutionConverter.getSolutionDtoWithId(solution);
    }

    @Override
    public SolutionDtoWithId updateScore(int id, SolutionScoreDto solutionScoreDto) throws SolutionNotFoundException {
        UserTestSolution solution = solutionRepository.findById(id)
                .orElseThrow(SolutionNotFoundException::new);
        solution.setChecked(true);
        solution.setScore(solutionScoreDto.getScore());
        solutionRepository.save(solution);
        return SolutionConverter.getSolutionDtoWithId(solution);
    }

    @Override
    public void sendEmail(int id) throws SolutionNotFoundException {
        UserTestSolution solution = solutionRepository.findById(id)
                .orElseThrow(SolutionNotFoundException::new);
        emailService.sendScoreEmail(solution.getUser().getEmail(), solution.getScore());
    }
}
