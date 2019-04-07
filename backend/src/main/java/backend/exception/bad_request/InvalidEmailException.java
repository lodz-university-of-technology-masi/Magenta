package backend.exception.bad_request;

public class InvalidEmailException extends BadRequestException {
    public InvalidEmailException(Throwable causedBy) {
        super(causedBy);
    }

    public InvalidEmailException() {
    }

    protected String getCustomMessage() {
        return "Adres email jest niepoprawny";
    }
}
