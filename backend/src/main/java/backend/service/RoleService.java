package backend.service;

import backend.dto.user.role.RolesChangesDto;
import backend.dto.user.role.RolesDto;
import backend.entity.Role;
import backend.exception.not_found.RoleNotFoundException;
import backend.exception.not_found.UserNotFoundException;

import java.util.List;

public interface RoleService {
    Role getRole(String name) throws RoleNotFoundException;
    List<Role> getRoles(String... roles) throws RoleNotFoundException;
    RolesDto getUserRoles(String username) throws UserNotFoundException;
    RolesDto updateRoles(String username, RolesChangesDto roles) throws UserNotFoundException, RoleNotFoundException;
}
