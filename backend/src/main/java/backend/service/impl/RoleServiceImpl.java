package backend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;
import backend.converter.RoleConverter;
import backend.dto.user.role.RoleChangeDto;
import backend.dto.user.role.RolesChangesDto;
import backend.dto.user.role.RolesDto;
import backend.entity.Role;
import backend.entity.User;
import backend.exception.not_found.RoleNotFoundException;
import backend.exception.not_found.UserNotFoundException;
import backend.repository.RoleRepository;
import backend.repository.UserRepository;
import backend.service.RoleService;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(isolation = Isolation.SERIALIZABLE, rollbackFor = Exception.class)
public class RoleServiceImpl implements RoleService {
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private UserRepository userRepository;

    @Override
    public Role getRole(String name) throws RoleNotFoundException {
        Role role = roleRepository.findByName(name)
                .orElseThrow(RoleNotFoundException::new);
        return role;
    }
    @Override
    public RolesDto getUserRoles(String username) throws UserNotFoundException {
        User user = userRepository.findByUsernameIgnoreCase(username)
                .orElseThrow(UserNotFoundException::new);
        return RoleConverter.getRolesDto(user.getRoles());
    }
    @Override
    public List<Role> getRoles(String... roles) throws RoleNotFoundException {
        List<Role> rolesFromDb = new ArrayList<>(roles.length);

        for (int i = 0; i < roles.length; i++) {
            rolesFromDb.add(getRole(roles[i]));
        }
        return rolesFromDb;
    }
    private boolean hasRole(User user, String role) throws RoleNotFoundException {
        return user.getRoles().contains(getRoles(role).get(0));
    }
    private void addRole(User user, String role) throws RoleNotFoundException {
        user.getRoles().add(
                getRoles(role).get(0)
        );
    }
    private void removeRole(User user, String role) throws RoleNotFoundException {
        user.getRoles().remove(getRoles(role).get(0));
    }
    @Override
    public RolesDto updateRoles(String username, RolesChangesDto roles) throws UserNotFoundException, RoleNotFoundException {
        User user = userRepository.findByUsernameIgnoreCase(username)
                .orElseThrow(UserNotFoundException::new);
        for (int i = 0; i < roles.getRoles().size(); i++) {
            RoleChangeDto role = roles.getRoles().get(i);
            if (hasRole(user, role.getRoleName())) {
                if (role.getOperation().equals("remove")) {
                    removeRole(user, role.getRoleName());
                }
            } else {
                if (role.getOperation().equals("add")) {
                    addRole(user, role.getRoleName());
                }
            }
        }
        userRepository.save(user);
        return RoleConverter.getRolesDto(user.getRoles());
    }
}
