package backend.exception;

import backend.exception.not_found.NotFoundException;

public class SolutionNotFoundException extends NotFoundException {
    @Override
    protected String getCustomMessage() {
        return "Rozwiązanie o podanym id nie istnieje";
    }
}
