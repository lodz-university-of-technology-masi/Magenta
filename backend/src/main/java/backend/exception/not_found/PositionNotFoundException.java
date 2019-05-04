package backend.exception.not_found;

public class PositionNotFoundException extends NotFoundException {
    @Override
    protected String getCustomMessage() {
        return "Nie ma stanowiska o podanym id";
    }
}
