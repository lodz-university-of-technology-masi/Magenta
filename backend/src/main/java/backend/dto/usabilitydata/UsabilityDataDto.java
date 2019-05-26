package backend.dto.usabilitydata;

import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class UsabilityDataDto {

    private String browser;

    private String username;

    private String width;

    private String height;

    private String clickCount;

    private int time;

    private int distance;

    private boolean failed;

    private String errorTypeNumber;
}
