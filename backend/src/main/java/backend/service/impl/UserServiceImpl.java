package backend.service.impl;

import backend.converter.UserConverter;
import backend.dto.user.*;
import backend.entity.Role;
import backend.entity.User;
import backend.exception.CustomException;
import backend.exception.bad_request.InvalidEmailException;
import backend.exception.bad_request.InvalidPasswordException;
import backend.exception.bad_request.InvalidUsernameException;
import backend.exception.confict.EmailNotUniqueException;
import backend.exception.confict.UsernameNotUniqueException;
import backend.exception.forbidden.ForbiddenException;
import backend.exception.not_found.UserNotFoundException;
import backend.repository.UserRepository;
import backend.security.TokenAuthentication;
import backend.service.EmailService;
import backend.service.PasswordService;
import backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@Service
@Transactional(rollbackFor = Exception.class)
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleServiceImpl roleService;

    @Autowired
    private PasswordService passwordService;

    @Autowired
    private EmailService emailService;

    @Autowired
    private TokenAuthentication tokenAuthentication;

    @Override
    public void canPerformOperation(String username, String authorizationToken) throws ForbiddenException {
        if (!tokenAuthentication.checkUser(username, authorizationToken)) {
            throw new ForbiddenException();
        }
    }

    @Override
    public UserListDto getUsersDataByRole(String roleName) throws CustomException {
        Role role = roleService.getRole(roleName);
        List<User> users = userRepository.getUserByRoles(role);
        return UserListDto.builder()
                .users(UserConverter.getUserDatas(users))
                .build();
    }

    @Override
    public UserLoginDetails addUser(UserRegisterDetails userRegisterData, String... roles) throws CustomException {
        validate(userRegisterData);

        List<Role> rolesFromDb = roleService.getRoles(roles);
        User user = UserConverter.getUser(userRegisterData);

        user.setPassword(passwordService.encode(userRegisterData.getPassword()));
        user.setRoles(new HashSet<>(rolesFromDb));

        userRepository.save(user);
        emailService.sendRegisterEmail(user.getEmail(), user.getUsername());

        return UserConverter.getUserLoginDetails(user);
    }

    @Override
    public UserLoginDetails updateUser(String username, UserUpdateData userUpdateData, String authorizationToken) throws CustomException {
        canPerformOperation(username, authorizationToken);
        User currentUser = userRepository.findByUsernameIgnoreCase(username)
                .orElseThrow(UserNotFoundException::new);

        validate(userUpdateData, currentUser);

        UserConverter.rewrite(currentUser, userUpdateData);

        userRepository.save(currentUser);
        return UserConverter.getUserLoginDetails(currentUser);
    }

    @Override
    public void deleteUser(String username, String authorizationToken) throws ForbiddenException {
        canPerformOperation(username, authorizationToken);
        Optional<User> userOptional = userRepository.findByUsernameIgnoreCase(username);
        if (userOptional.isPresent()) {
            try {
                userRepository.delete(userOptional.get());
            } catch (EmptyResultDataAccessException e) {
            }
        }
    }

    @Override
    public UserData getUserData(String username, String authorizationToken) throws UserNotFoundException {
        User user = userRepository.findByUsernameIgnoreCase(username).orElseThrow(UserNotFoundException::new);
        return UserConverter.getUserData(user,
                tokenAuthentication.checkUser(username, authorizationToken));
    }

    private void validate(UserRegisterDetails userRegisterData) throws InvalidUsernameException, UsernameNotUniqueException, InvalidPasswordException, InvalidEmailException, EmailNotUniqueException {
        validateUsername(userRegisterData.getUsername());
        validateEmail(userRegisterData.getEmail());
        passwordService.validatePassword(userRegisterData.getPassword());
    }

    private void validate(UserUpdateData userUpdateData, User currentUser) throws InvalidUsernameException, UsernameNotUniqueException, InvalidEmailException, EmailNotUniqueException {
        validateUsername(userUpdateData.getUsername(), currentUser.getUsername());
        validateEmail(currentUser.getId(), userUpdateData.getEmail());
    }

    private void validateUsernameLength(String username) throws InvalidUsernameException {
        if (username.length() < User.MIN_USERNAME_LENGTH || username.length() > User.MAX_USERNAME_LENGTH) {
            throw new InvalidUsernameException();
        }
    }

    private void validateUsername(String username) throws InvalidUsernameException, UsernameNotUniqueException {
        validateUsernameLength(username);

        if (userRepository.findByUsernameIgnoreCase(username).isPresent()) {
            throw new UsernameNotUniqueException();
        }
    }

    private void validateUsername(String username, String currentUsername) throws InvalidUsernameException, UsernameNotUniqueException {
        validateUsernameLength(username);

        if (!username.equals(currentUsername) && userRepository.findByUsernameIgnoreCase(username).isPresent()) {
            throw new UsernameNotUniqueException();
        }
    }

    private void validateEmail(String email) throws EmailNotUniqueException, InvalidEmailException {
        emailService.validateEmail(email);
        emailService.checkIfEmailIsUnique(-1, email);
    }

    private void validateEmail(int userId, String email) throws EmailNotUniqueException, InvalidEmailException {
        emailService.validateEmail(email);
        emailService.checkIfEmailIsUnique(userId, email);
    }

}
