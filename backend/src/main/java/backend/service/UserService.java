package backend.service;

import backend.exception.CustomException;
import backend.exception.forbidden.ForbiddenException;
import backend.exception.not_found.UserNotFoundException;
import backend.dto.user.*;
import org.springframework.data.domain.Page;

public interface UserService {
    Page<UserData> getUsersData(int page, int pageSize);
    void canPerformOperation(String username, String authorizationToken) throws ForbiddenException;
    UserLoginDetails addUser(UserRegisterDetails userRegisterData, String... roles) throws CustomException;
    UserLoginDetails updateUser(String username, UserUpdateData userRegisterDetails, String authorizationToken) throws CustomException;
    void deleteUser(String username, String authorizationToken) throws ForbiddenException;
    UserData getUserData(String username, String authorizationToken) throws UserNotFoundException;
}
