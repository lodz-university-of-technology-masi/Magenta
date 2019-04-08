package backend.exception.internal_server_error;


import backend.exception.CustomException;

public class InternalServerErrorException extends CustomException {
    public InternalServerErrorException(Throwable causedBy) {
        super(causedBy);
    }

    public InternalServerErrorException() {
    }

    @Override
    protected String getCustomMessage() {
        return "Nieznany błąd";
    }

    @Override
    public int getMessageCode() {
        return 500;
    }
}
