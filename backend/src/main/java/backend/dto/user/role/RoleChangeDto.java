package backend.dto.user.role;
import lombok.*;

@Builder
@Data
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class RoleChangeDto {
    private String roleName;
    private String operation;
}