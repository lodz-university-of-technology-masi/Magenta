package backend.exception.confict;

import backend.exception.CustomException;

public abstract  class ConflictException extends CustomException {
    public ConflictException(Throwable causedBy) {
        super(causedBy);
    }

    public ConflictException() {
    }

    public int getMessageCode() {
        return 409;
    }
}
