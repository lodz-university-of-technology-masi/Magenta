package backend.service.impl;

import backend.converter.PositionConverter;
import backend.dto.position.PositionDto;
import backend.dto.position.PositionListDto;
import backend.entity.Position;
import backend.entity.Test;
import backend.exception.not_found.PositionNotFoundException;
import backend.exception.not_found.TestNotFoundException;
import backend.repository.PositionRepository;
import backend.repository.TestRepository;
import backend.service.PositionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PositionServiceImpl implements PositionService {

    @Autowired
    private PositionRepository positionRepository;

    @Autowired
    private TestRepository testRepository;

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
    public PositionDto addPosition(PositionDto positionDto) {
        Position position = positionRepository.save(PositionConverter.getPosition(positionDto));
        return PositionConverter.getPositionDto(position);
    }

    @Override
    public PositionDto changeStatus(int id, boolean active) throws PositionNotFoundException {
        Position updatedPosition = positionRepository.findById(id)
                .map(p -> p.withActive(active))
                .map(p -> positionRepository.save(p))
                .orElseThrow(PositionNotFoundException::new);
        return PositionConverter.getPositionDto(updatedPosition);
    }

    @Override
    public PositionDto assignTest(int id, int testId) throws PositionNotFoundException, TestNotFoundException {
        Test test = testRepository.findById(testId)
                .orElseThrow(TestNotFoundException::new);

        Position position = positionRepository.findById(id)
                .map(p -> p.withTest(test))
                .map(p -> positionRepository.save(p))
                .orElseThrow(PositionNotFoundException::new);

        test.getPositions().add(position);
        testRepository.save(test);

        return PositionConverter.getPositionDto(position);
    }
}
