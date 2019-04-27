package backend.exception.bad_request;

public class UnsupportedQuestionType extends BadRequestException {
    @Override
    protected String getCustomMessage() {
        return "Podany typ pytania nie jest obsługiwany";
    }
}
