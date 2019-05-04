package backend.dto.solution;

import lombok.*;

import java.util.List;

@Data
@Builder
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class SolutionDtoWithId {
    private int id;
    boolean checked;
    private int score;
    private SolutionTestDto test;
    private SolutionUserDto user;
    private List<AnswerDto> answers;
}
