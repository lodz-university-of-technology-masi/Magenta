package backend.exception.bad_request;

public class InvalidPasswordException extends BadRequestException {
    public InvalidPasswordException(Throwable causedBy) {
        super(causedBy);
    }

    public InvalidPasswordException() {
    }

    protected String getCustomMessage() {
        return "Hasło jest niepoprawne";
    }
}
