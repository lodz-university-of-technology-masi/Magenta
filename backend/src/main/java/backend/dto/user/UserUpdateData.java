package backend.dto.user;

import lombok.*;

@Builder
@Data
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class UserUpdateData {
    private String username;
    private String email;
    private String nameSurname;
    private String language;
}
