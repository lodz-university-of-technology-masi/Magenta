package backend.service;

import backend.dto.solution.SolutionDto;
import backend.dto.solution.SolutionDtoWithId;

import java.util.List;

public interface SolutionService {
    List<SolutionDtoWithId> getAll(String username);

    SolutionDtoWithId get(int id);

    SolutionDtoWithId create(String username, SolutionDto solutionDto);
}
