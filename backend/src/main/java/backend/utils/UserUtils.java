package backend.utils;

import backend.entity.User;

public class UserUtils {

    public static boolean checkUserRole(User user, String roleName) {
        return user.getRoles().stream().anyMatch(role -> role.getName().equals(roleName));
    }
}
