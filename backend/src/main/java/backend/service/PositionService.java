package backend.service;

import backend.dto.position.PositionDto;
import backend.dto.position.PositionListDto;

public interface PositionService {
    PositionListDto getPositions();
    void addPosition(PositionDto positionDto);
}
