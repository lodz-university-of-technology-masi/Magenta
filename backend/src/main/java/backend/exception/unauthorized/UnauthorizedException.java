package backend.exception.unauthorized;

import backend.exception.CustomException;

public abstract class UnauthorizedException extends CustomException {
    public UnauthorizedException(Throwable causedBy) {
        super(causedBy);
    }

    public UnauthorizedException() {
    }

    @Override
    public int getMessageCode() {
        return 401;
    }
}
