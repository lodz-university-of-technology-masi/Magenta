package backend.converter;

import backend.dto.test.TestDto;
import backend.entity.Test;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public abstract class TestConverter extends ConverterBase {
    public static List<TestDto> getRolesDtoList(Collection<Test> tests) {
        List<TestDto> testsDto = new ArrayList<>(tests.size());

        tests.forEach(role -> {
            testsDto.add(getTestDto(role));
        });

        return testsDto;
    }

    public static TestDto getTestDto(Test test) {
        return mapper.map(test, TestDto.class);
    }
}
