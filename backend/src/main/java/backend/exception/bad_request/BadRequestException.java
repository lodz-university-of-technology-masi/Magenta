package backend.exception.bad_request;

import backend.exception.CustomException;

public abstract class BadRequestException extends CustomException {
    public int getMessageCode() {
        return 400;
    }

    public BadRequestException(Throwable causedBy) {
        super(causedBy);
    }

    public BadRequestException() {
    }
}
