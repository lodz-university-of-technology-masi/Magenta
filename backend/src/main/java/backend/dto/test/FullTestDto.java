package backend.dto.test;

import backend.dto.position.PositionDto;
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
