package backend.exception.bad_request;

public class BadTranslationRequest extends BadRequestException {
    @Override
    protected String getCustomMessage() {
        return "Niepoprawny request translatora";
    }
}