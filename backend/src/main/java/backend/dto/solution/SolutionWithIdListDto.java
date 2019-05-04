package backend.dto.solution;

import lombok.*;

import java.util.List;

@Data
@Builder
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class SolutionWithIdListDto {
    private List<SolutionDtoWithId> solutions;
}
