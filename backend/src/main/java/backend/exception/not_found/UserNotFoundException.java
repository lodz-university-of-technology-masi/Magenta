package backend.exception.not_found;

public class UserNotFoundException extends NotFoundException {

    protected String getCustomMessage() {
        return "Użytkownik nie istnieje";
    }

    public UserNotFoundException(Throwable causedBy) {
        super(causedBy);
    }

    public UserNotFoundException() {
    }
}
