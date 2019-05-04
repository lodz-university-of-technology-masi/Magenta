package backend.dto.solution;

import lombok.*;

import java.util.List;

@Data
@Builder
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class SolutionDto {
    private int testId;
    private List<AnswerDto> answers;
}
