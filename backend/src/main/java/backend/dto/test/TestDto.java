package backend.dto.test;

import lombok.*;

@Data
@Builder
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class TestDto {

    private int id;

    private String name;

    private String language;
}
