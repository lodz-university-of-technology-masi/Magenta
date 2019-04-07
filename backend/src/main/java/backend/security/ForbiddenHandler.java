package backend.security;

import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import backend.utils.MessageFactory;
import backend.utils.HttpUtils;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ForbiddenHandler implements AccessDeniedHandler {
    @Override
    public void handle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, AccessDeniedException e) throws IOException, ServletException {
        HttpUtils.buildResponse(httpServletResponse,
                MessageFactory.getInstance()
                        .getMessageAsJsonString(403, "Brak uprawnień"),
                403);
    }
}
