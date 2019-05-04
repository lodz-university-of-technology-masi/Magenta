package backend.service.impl;

import backend.converter.SolutionConverter;
import backend.dto.solution.SolutionDto;
import backend.dto.solution.SolutionDtoWithId;
import backend.entity.Test;
import backend.entity.User;
import backend.entity.UserTestSolution;
import backend.exception.not_found.TestNotFoundException;
import backend.exception.not_found.UserNotFoundException;
import backend.repository.SolutionRepository;
import backend.repository.TestRepository;
import backend.repository.UserRepository;
import backend.service.SolutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;

@Service
public class SolutionServiceImpl implements SolutionService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TestRepository testRepository;

    @Autowired
    private SolutionRepository solutionRepository;

    @Override
    public List<SolutionDtoWithId> getAll(String username) {
        return null;
    }

    @Override
    public SolutionDtoWithId get(int id) {
        return null;
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
}
