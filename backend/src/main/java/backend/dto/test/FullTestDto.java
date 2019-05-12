package backend.dto.test;

import backend.dto.position.PositionDto;
import backend.dto.question.QuestionDto;
import backend.dto.solution.SolutionDto;
import lombok.*;

import java.util.List;

@Data
@Builder
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class FullTestDto {
    private int id;
    private String name;
    private String language;
    private List<PositionDto> positions;
}
