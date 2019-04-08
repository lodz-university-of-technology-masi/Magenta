package backend.exception.forbidden;

import backend.exception.CustomException;

public class ForbiddenException extends CustomException {
    public ForbiddenException(Throwable causedBy) {
        super(causedBy);
    }

    public ForbiddenException() {
    }

    @Override
    protected String getCustomMessage() {
        return "Brak uprawnień";
    }

    @Override
    public int getMessageCode() {
        return 403;
    }
}
