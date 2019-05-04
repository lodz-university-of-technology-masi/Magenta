package backend.service;

import backend.dto.position.PositionDto;
import backend.dto.position.PositionListDto;
import backend.exception.not_found.PositionNotFoundException;
import backend.exception.not_found.TestNotFoundException;

public interface PositionService {
    PositionListDto getPositions();

    PositionDto addPosition(PositionDto positionDto);

    PositionDto changeStatus(int id, boolean active) throws PositionNotFoundException;

    PositionDto assignTest(int id, int testId) throws PositionNotFoundException, TestNotFoundException;
}
