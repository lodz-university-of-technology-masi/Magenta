package backend.dto.user.role;

import java.util.List;

import lombok.*;

@Builder
@Data
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class RolesChangesDto {
    private List<RoleChangeDto> roles;
}