package backend.converter;

import backend.dto.user.role.RolesDto;
import backend.entity.Role;
import backend.dto.user.role.RoleDto;

import java.util.Collection;
import java.util.List;
import java.util.ArrayList;

public abstract class RoleConverter extends ConverterBase {
    public static List<RoleDto> getRolesDtoList(Collection<Role> roles) {
        List<RoleDto> rolesDto = new ArrayList<>(roles.size());

        roles.forEach(role -> {
            rolesDto.add(getRoleDto(role));
        });

        return rolesDto;
    }
    public static RoleDto getRoleDto(Role role) {
        return mapper.map(role, RoleDto.class);
    }
    public static RolesDto getRolesDto(Collection<Role> roles) {
        return RolesDto.builder()
                .roles(getRolesDtoList(roles))
                .build();
    }
}