package backend.exception.confict;

public class EmailNotUniqueException extends ConflictException {
    public EmailNotUniqueException(Throwable causedBy) {
        super(causedBy);
    }

    public EmailNotUniqueException() {
    }

    @Override
    protected String getCustomMessage() {
        return "Email zajęty";
    }
}
