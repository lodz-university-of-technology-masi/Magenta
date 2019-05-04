package backend.service.impl;

import backend.dto.solution.SolutionDto;
import backend.dto.solution.SolutionDtoWithId;
import backend.service.SolutionService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SolutionServiceImpl implements SolutionService {
    @Override
    public List<SolutionDtoWithId> getAll(String username) {
        return null;
    }

    @Override
    public SolutionDtoWithId get(int id) {
        return null;
    }

    @Override
    public SolutionDtoWithId create(String username, SolutionDto solutionDto) {
        return null;
    }
}
