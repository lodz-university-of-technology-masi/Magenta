package backend.exception.bad_request;

public class BadSynonymRequest extends BadRequestException {
    @Override
    protected String getCustomMessage() {
        return "Niepoprawny request synonimów";
    }
}
