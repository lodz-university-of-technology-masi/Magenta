package backend.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.context.ApplicationContext;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import backend.exception.ExceptionHandler;
import backend.utils.MessageFactory;
import backend.utils.HttpUtils;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JWTLoginFilter extends AbstractAuthenticationProcessingFilter {

    private TokenAuthentication tokenAuthenticationUtils;

    public JWTLoginFilter(String url, AuthenticationManager authManager,
                          ApplicationContext ctx) {
        super(new AntPathRequestMatcher(url));
        setAuthenticationManager(authManager);
        tokenAuthenticationUtils = ctx.getBean(TokenAuthentication.class);
    }

    @Override
    public Authentication attemptAuthentication(
            HttpServletRequest req, HttpServletResponse res)
            throws AuthenticationException, IOException, ServletException {

        UserLoginCredentials user = new ObjectMapper()
                .readValue(req.getInputStream(), UserLoginCredentials.class);

        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
                user.getUsername(),
                user.getPassword()
        );
        try {
            return getAuthenticationManager().authenticate(token);
        } catch (AuthenticationException exc) {
            HttpUtils.buildResponse(res, MessageFactory.getInstance()
            .getMessageAsJsonString(401, "Login lub hasło są niepoprawne"),
                    HttpServletResponse.SC_UNAUTHORIZED);
            throw exc;
        }
    }

    @Override
    protected void successfulAuthentication(
            HttpServletRequest req,
            HttpServletResponse res, FilterChain chain,
            Authentication auth) throws IOException {

        try {
            tokenAuthenticationUtils
                    .addAuthentication(res, auth);
        } catch (Exception e) {
            ResponseEntity handledException = ExceptionHandler.handle(e);
            HttpUtils.buildResponse(res, new ObjectMapper()
                            .writeValueAsString(handledException.getBody()),
                    handledException.getStatusCode().value());
        }
    }
}