package backend.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;
import backend.entity.User;
import backend.repository.UserRepository;
import backend.exception.bad_request.InvalidEmailException;
import backend.exception.confict.EmailNotUniqueException;
import backend.service.EmailService;

import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import java.util.Optional;

@Service
public class EmailServiceImpl implements EmailService {

    @Autowired
    private JavaMailSenderImpl mailSender;

    @Autowired
    private UserRepository userRepository;

    private static Logger logger = LoggerFactory.getLogger(EmailService.class);

    public void checkIfEmailIsUnique(int userId, String email) throws EmailNotUniqueException {
        Optional<User> userOptional = userRepository.findByEmail(email);
        if (userOptional.isPresent() && userOptional.get().getId() != userId) {
            throw new EmailNotUniqueException();
        }
    }

    @Override
    public void validateEmail(String email) throws InvalidEmailException {
        try {
            InternetAddress emailAddress = new InternetAddress(email);
            emailAddress.validate();
        } catch (AddressException e) {
            throw new InvalidEmailException(e);
        }
    }

    @Override
    public void sendEmail(String address, String title, String content) {
        new Thread(() -> {
            try {
                SimpleMailMessage message = new SimpleMailMessage();
                message.setTo(address);
                message.setSubject(title);
                message.setText(content);
                mailSender.send(message);
            } catch (Exception exception) {
                logger.error("Can't send email!", exception);
            }
        }).start();
    }

    @Override
    public void sendRegisterEmail(String address, String username) {
        sendEmail(address,
                formatEmail("Pomyślna rejestracja"),
                formatEmail("%s twoje konto zostało stworzone.", username));
    }

    @Override
    public void sendResetPasswordEmail(String address, String username, String newPassword) {
        sendEmail(address,
                formatEmail("Hasło zresetowane"),
                formatEmail("%s twoje hasło zostało zresetowane.\n" +
                        "Twoje nowe hasło to:%s", username, newPassword));
    }

    private String formatEmail(String message, Object... args) {
        return String.format(message,
                args);
    }
}
