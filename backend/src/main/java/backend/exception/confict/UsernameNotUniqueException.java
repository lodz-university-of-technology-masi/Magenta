package backend.exception.confict;

public class UsernameNotUniqueException extends ConflictException {

    public UsernameNotUniqueException(Throwable causedBy) {
        super(causedBy);
    }

    public UsernameNotUniqueException() {
    }

    protected String getCustomMessage() {
        return "Nazwa użytkownika jest zajęta";
    }
}
