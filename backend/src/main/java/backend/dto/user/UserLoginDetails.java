package backend.dto.user;

import lombok.*;
import backend.dto.user.role.RoleDto;

import java.util.List;

@Builder
@Data
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class UserLoginDetails {
    private String username;
    private String email;
    private String language;
    private List<RoleDto> roles;
}
