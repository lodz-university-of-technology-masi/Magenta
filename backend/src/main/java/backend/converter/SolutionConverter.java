package backend.converter;

import backend.dto.solution.AnswerDto;
import backend.dto.solution.SolutionDtoWithId;
import backend.entity.UserAnswer;
import backend.entity.UserTestSolution;

public abstract class SolutionConverter extends ConverterBase {
    public static UserAnswer getUserAnswer(AnswerDto answerDto, UserTestSolution solution) {
        UserAnswer answer = mapper.map(answerDto, UserAnswer.class);
        answer.setTest(solution);
        return answer;
    }

    public static SolutionDtoWithId getSolutionDtoWithId(UserTestSolution solution) {
        return mapper.map(solution, SolutionDtoWithId.class);
    }
}
