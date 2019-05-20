package backend.service;

import backend.exception.bad_request.InvalidEmailException;
import backend.exception.confict.EmailNotUniqueException;

public interface EmailService {
    void checkIfEmailIsUnique(int userId, String email) throws EmailNotUniqueException;
    void validateEmail(String email) throws InvalidEmailException;
    void sendEmail(String address, String title, String content);
    void sendRegisterEmail(String address, String username);
    void sendResetPasswordEmail(String address, String username, String newPassword);
    void sendScoreEmail(String address, double score);
}
