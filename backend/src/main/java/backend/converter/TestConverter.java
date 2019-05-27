package backend.converter;

import backend.dto.test.FullTestDto;
import backend.dto.test.TestDto;
import backend.dto.test.TestUpdateData;
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

    public static FullTestDto getFullTestDto(Test test) {
        return mapper.map(test, FullTestDto.class);
    }

    public static void rewrite(Test test, TestUpdateData updateData) {
        mapper.map(updateData, test);
    }

    public static Test getTest(TestDto testDto) {
        return mapper.map(testDto, Test.class);
    }
}
