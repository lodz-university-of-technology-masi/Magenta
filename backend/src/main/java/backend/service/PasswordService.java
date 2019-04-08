package backend.service;

import backend.dto.user.password.PasswordChangeDto;
import backend.dto.user.password.ResetPasswordDto;
import backend.exception.bad_request.InvalidPasswordException;
import backend.exception.forbidden.WrongOldPasswordException;
import backend.exception.not_found.UserNotFoundException;

public interface PasswordService {
    void changePassword(String username, PasswordChangeDto passwords, String token) throws UserNotFoundException, WrongOldPasswordException, InvalidPasswordException;
    void validatePassword(String password) throws InvalidPasswordException;
    String encode(String password);
    void resetPassword(ResetPasswordDto resetPassword);
}
