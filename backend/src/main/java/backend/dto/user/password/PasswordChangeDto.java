package backend.dto.user.password;

import lombok.*;

@Builder
@Data
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class PasswordChangeDto {
    private String oldPassword;
    private String newPassword;
}
