package backend.converter;

import backend.entity.User;
import backend.dto.user.*;

import java.util.ArrayList;
import java.util.List;

public abstract class UserConverter extends ConverterBase {
    public static UserLoginDetails getUserLoginDetails(User user) {
        UserLoginDetails loginDetails = mapper.map(user, UserLoginDetails.class);
        loginDetails.setRoles(RoleConverter.getRolesDto(
                user.getRoles()).getRoles()
        );

        return loginDetails;
    }
    public static User getUser(UserRegisterDetails userRegisterDetails) {
        return mapper.map(userRegisterDetails, User.class);
    }
    public static void rewrite(User desc, UserUpdateData src) {
        mapper.map(src, desc);
    }
    public static UserData getUserData(User user, boolean includeEmail) {
        UserData userData = mapper.map(user, UserData.class);

        userData.setRoles(RoleConverter.getRolesDto(
                user.getRoles()).getRoles()
        );
        if (!includeEmail) {
            userData.setEmail(null);
        }
        return userData;
    }
    public static List<UserData> getUserDatas(List<User> products) {
        List<UserData> userDatas = new ArrayList<>(products.size());

        products.forEach(item ->
                userDatas.add(getUserData(item, false)));

        return userDatas;
    }
}
