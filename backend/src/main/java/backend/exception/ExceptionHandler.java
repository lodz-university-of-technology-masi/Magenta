package backend.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import backend.exception.internal_server_error.InternalServerErrorException;
import backend.dto.ApiError;


public abstract class ExceptionHandler {
    private static Logger logger = LoggerFactory.getLogger(ExceptionHandler.class);

    public static ResponseEntity handle(Exception exception) {
        if (exception instanceof CustomException) {
            logger.warn("Handled exception", exception);
            return ResponseEntity
                    .status(((CustomException) exception).getMessageCode())
                    .body(ApiError.builder()
                        .code(((CustomException) exception).getMessageCode())
                        .message(exception.getMessage())
                        .build());
        } else {
            logger.error("Fatal error", exception);
            return ResponseEntity
                    .status(500)
                    .body(ApiError.builder()
                        .code(500)
                        .message(
                            new InternalServerErrorException().getMessage()
                        )
                        .build()
                    );
        }
    }
}
