package backend.service.impl;

import backend.converter.PositionConverter;
import backend.dto.position.PositionDto;
import backend.dto.position.PositionListDto;
import backend.entity.Position;
import backend.repository.PositionRepository;
import backend.service.PositionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PositionServiceImpl implements PositionService {

    @Autowired
    private PositionRepository positionRepository;

    @Override
    public PositionListDto getPositions() {
        List<PositionDto> positions = positionRepository.findAll().stream()
                .map(PositionConverter::getPositionDto)
                .collect(Collectors.toList());
        return PositionListDto.builder()
                .positions(positions)
                .build();
    }

    @Override
    public void addPosition(PositionDto positionDto) {
        Position position = PositionConverter.getPosition(positionDto);
        positionRepository.save(position);
    }
}
