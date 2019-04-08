package backend.exception.forbidden;

public class WrongOldPasswordException extends ForbiddenException {
    @Override
    protected String getCustomMessage() {
        return "Stare hasło jest niepoprawne";
    }

    public WrongOldPasswordException(Throwable causedBy) {
        super(causedBy);
    }

    public WrongOldPasswordException() {
    }
}
