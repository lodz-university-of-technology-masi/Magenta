package backend.service;

import backend.dto.solution.SolutionScoreDto;
import backend.dto.solution.SolutionDto;
import backend.dto.solution.SolutionDtoWithId;
import backend.dto.solution.SolutionWithIdListDto;
import backend.exception.SolutionNotFoundException;
import backend.exception.not_found.TestNotFoundException;
import backend.exception.not_found.UserNotFoundException;

public interface SolutionService {
    SolutionWithIdListDto getAllForRedactor(String authorization);

    SolutionWithIdListDto getAll(String username);

    SolutionDtoWithId get(int id) throws SolutionNotFoundException;

    SolutionDtoWithId create(String username, SolutionDto solutionDto) throws UserNotFoundException, TestNotFoundException;

    SolutionDtoWithId updateScore(int id, SolutionScoreDto solutionScoreDto) throws SolutionNotFoundException;
}
