package backend.service.impl;

import backend.entity.User;
import backend.exception.not_found.WikipediaDefinitionNotFound;
import backend.exception.unauthorized.UnauthorizedException;
import backend.exception.unauthorized.UserNotFoundException;
import backend.repository.UserRepository;
import backend.security.TokenAuthentication;
import backend.utils.WikipediaUtils;
import backend.service.UtilsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UtilsServiceImpl implements UtilsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TokenAuthentication tokenAuthentication;

    @Override
    public String getWikipediaDefinition(String wantedText, String authorizationToken) throws WikipediaDefinitionNotFound, UserNotFoundException {
        String currentUserName = tokenAuthentication.getUsername(authorizationToken);
        Optional<User> currentUser = userRepository.findByUsernameIgnoreCase(currentUserName);
        if (currentUser.isPresent()) {
            String result = WikipediaUtils.getWikipediaDefinition(wantedText, currentUser.get().getLanguage());
            if (result.isEmpty()) {
                throw new WikipediaDefinitionNotFound();
            } else {
                return result;
            }
        } else {
            throw new UserNotFoundException();
        }
    }
}
