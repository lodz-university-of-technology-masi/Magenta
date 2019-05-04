package backend.dto.position;

import lombok.*;

@Data
@Builder
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class PositionDto {

    private Integer id;

    private String name;

    private boolean active;
}
