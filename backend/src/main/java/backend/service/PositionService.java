package backend.service;

import backend.dto.position.PositionDto;
import backend.dto.position.PositionListDto;
import backend.exception.not_found.PositionNotFoundException;

public interface PositionService {
    PositionListDto getPositions();

    void addPosition(PositionDto positionDto);

    PositionDto changeStatus(int id, boolean active) throws PositionNotFoundException;
}
