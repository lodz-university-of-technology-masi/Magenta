package backend.service.impl;

import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import backend.dto.user.password.PasswordChangeDto;
import backend.dto.user.password.ResetPasswordDto;
import backend.entity.User;
import backend.exception.bad_request.InvalidPasswordException;
import backend.exception.forbidden.WrongOldPasswordException;
import backend.exception.not_found.UserNotFoundException;
import backend.repository.UserRepository;
import backend.service.EmailService;
import backend.service.PasswordService;

@Service
@Transactional(rollbackFor = Exception.class)
public class PasswordServiceImpl implements PasswordService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmailService emailService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private Environment environment;

    private int getRandomPasswordCharactersCount() {
        return Integer.parseInt(environment.getProperty("config.security.password-reset.length"));
    }
    private String getCharacters() {
        return environment.getProperty("config.security.password-reset.characters");
    }
    @Override
    public void changePassword(String username, PasswordChangeDto passwords, String token) throws UserNotFoundException, WrongOldPasswordException, InvalidPasswordException {
        User user = userRepository.findByUsernameIgnoreCase(username)
                .orElseThrow(UserNotFoundException::new);
        if (passwordEncoder.matches(passwords.getOldPassword(), user.getPassword())) {
            validatePassword(passwords.getNewPassword());
            user.setPassword(encode(passwords.getNewPassword()));
        } else {
            throw new WrongOldPasswordException();
        }
        userRepository.save(user);
    }
    @Override
    public void validatePassword(String password) throws InvalidPasswordException {
        if (password.length() < User.MIN_PASSWORD_LENGTH && password.length() > User.MAX_PASSWORD_LENGTH) {
            throw new InvalidPasswordException();
        }
    }

    @Override
    public String encode(String password) {
        return passwordEncoder.encode(password);
    }

    @Override
    public void resetPassword(ResetPasswordDto resetPassword) {
        userRepository.findByEmail(resetPassword.getEmail())
                .ifPresent(user -> {
            String newPassword = RandomStringUtils.random(getRandomPasswordCharactersCount(), getCharacters());
            user.setPassword(encode(newPassword));
            emailService.sendResetPasswordEmail(user.getEmail(),
                    user.getUsername(),
                    newPassword);
            userRepository.save(user);
        });
    }
}
