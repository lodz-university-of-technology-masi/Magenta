package backend.exception.not_found;

public class RoleNotFoundException extends NotFoundException {
    public RoleNotFoundException(Throwable causedBy) {
        super(causedBy);
    }

    public RoleNotFoundException() {
    }

    @Override
    protected String getCustomMessage() {
        return "Rola nie istnieje";
    }
}
