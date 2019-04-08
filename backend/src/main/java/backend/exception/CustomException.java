package backend.exception;

public abstract class CustomException extends Exception {

    public CustomException(Throwable causedBy) {
        super(causedBy);
    }
    public CustomException() { }

    protected abstract String getCustomMessage();
    public abstract int getMessageCode();

    public String getMessage() {
        return getCustomMessage();
    }
}

