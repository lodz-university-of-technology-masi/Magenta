package backend.exception.not_found;

public class TestNotFoundException extends NotFoundException {
    @Override
    protected String getCustomMessage() {
        return "Nie ma testu o podanym id";
    }
}
