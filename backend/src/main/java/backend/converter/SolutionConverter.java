package backend.converter;

import backend.dto.solution.AnswerDto;
import backend.dto.solution.SolutionDtoWithId;
import backend.entity.UserAnswer;
import backend.entity.UserTestSolution;

import java.util.ArrayList;
import java.util.List;

public abstract class SolutionConverter extends ConverterBase {
    public static UserAnswer getUserAnswer(AnswerDto answerDto, UserTestSolution solution) {
        UserAnswer answer = mapper.map(answerDto, UserAnswer.class);
        answer.setTest(solution);
        return answer;
    }

    public static SolutionDtoWithId getSolutionDtoWithId(UserTestSolution solution) {
        return mapper.map(solution, SolutionDtoWithId.class);
    }
    public static List<SolutionDtoWithId> getSolutionDtosWithId(List<UserTestSolution> solutions) {
        List<SolutionDtoWithId> result = new ArrayList<>(solutions.size());

        solutions.forEach(item -> {
            result.add(getSolutionDtoWithId(item));
        });

        return result;
    }
}
