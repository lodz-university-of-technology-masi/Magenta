package backend.exception.not_found;

public class WikipediaDefinitionNotFound extends NotFoundException {
    @Override
    protected String getCustomMessage() {
        return "Nie znaleziono definicji podanego słowa";
    }
}