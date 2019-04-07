package backend.security;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.SignatureException;
import org.springframework.context.ApplicationContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;
import org.springframework.security.core.Authentication;
import backend.exception.unauthorized.UserNotFoundException;
import backend.utils.MessageFactory;
import backend.utils.HttpUtils;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JWTAuthenticationFilter extends GenericFilterBean {

    private TokenAuthentication tokenAuthenticationUtils;

    public JWTAuthenticationFilter(ApplicationContext ctx) {
        tokenAuthenticationUtils = ctx.getBean(TokenAuthentication.class);
    }

    @Override
    public void doFilter(ServletRequest request,
                         ServletResponse response,
                         FilterChain filterChain)
            throws IOException, ServletException {
        try {
            Authentication authentication = tokenAuthenticationUtils
                    .getAuthentication((HttpServletRequest) request,
                            (HttpServletResponse) response);
            
            SecurityContextHolder.getContext()
                    .setAuthentication(authentication);

            filterChain.doFilter(request, response);
        } catch (ExpiredJwtException e) {
            build401Response(response, "Sesja wygasła");
        } catch (SignatureException e) {
            build401Response(response, "Jesteś niezalogowany");
        } catch (UserNotFoundException e) {
            build401Response(response, "Użytkownik nie istnieje");
        }
    }
    private void build401Response(ServletResponse response, String message) throws IOException {
        HttpServletResponse httpResponse =(HttpServletResponse) response;

        HttpUtils.buildResponse(httpResponse, MessageFactory.getInstance()
                        .getMessageAsJsonString(HttpServletResponse.SC_UNAUTHORIZED, message),
                HttpServletResponse.SC_UNAUTHORIZED);
    }
}