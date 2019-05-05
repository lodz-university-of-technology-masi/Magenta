package backend.dto.solution;

import lombok.*;

@Data
@Builder
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class SolutionTestDto {
    private int id;
    private String name;

    private String language;
}
