package backend.exception.bad_request;

public class InvalidUsernameException extends BadRequestException {
    public InvalidUsernameException(Throwable causedBy) {
        super(causedBy);
    }

    public InvalidUsernameException() {
    }

    protected String getCustomMessage() {
        return "Nazwa użytkownika jest niepoprawna";
    }
}
