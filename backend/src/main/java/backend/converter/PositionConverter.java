package backend.converter;

import backend.dto.position.PositionDto;
import backend.entity.Position;

public class PositionConverter extends ConverterBase {
    public static Position getPosition(PositionDto positionDto) {
        return mapper.map(positionDto, Position.class);
    }

    public static PositionDto getPositionDto(Position position) {
        return mapper.map(position, PositionDto.class);
    }
}
