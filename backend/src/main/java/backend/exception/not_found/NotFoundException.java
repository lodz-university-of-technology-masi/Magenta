package backend.exception.not_found;

import backend.exception.CustomException;

public abstract class NotFoundException extends CustomException {
    public int getMessageCode() {
        return 404;
    }

    public NotFoundException(Throwable causedBy) {
        super(causedBy);
    }

    public NotFoundException() {
    }
}
