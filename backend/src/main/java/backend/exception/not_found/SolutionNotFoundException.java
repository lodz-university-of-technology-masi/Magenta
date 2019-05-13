package backend.exception.not_found;

public class SolutionNotFoundException extends NotFoundException {
    @Override
    protected String getCustomMessage() {
        return "Rozwiązanie o podanym id nie istnieje";
    }
}
