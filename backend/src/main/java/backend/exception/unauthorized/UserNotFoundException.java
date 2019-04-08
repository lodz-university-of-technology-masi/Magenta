package backend.exception.unauthorized;

public class UserNotFoundException extends UnauthorizedException {
    public UserNotFoundException(Throwable causedBy) {
        super(causedBy);
    }

    public UserNotFoundException() {
    }

    @Override
    protected String getCustomMessage() {
        return  "Użytkownik nie istnieje";
    }
}
