package backend.dto.user;

import lombok.*;

@Builder
@Data
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class UserRegisterDetails {
    private String username;
    private String password;
    private String nameSurname;
    private String email;
}
