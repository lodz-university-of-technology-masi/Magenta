package backend.service;

import backend.exception.not_found.WikipediaDefinitionNotFound;
import backend.exception.unauthorized.UserNotFoundException;

public interface UtilsService {
    String getWikipediaDefinition(String wantedText, String authorizationToken) throws WikipediaDefinitionNotFound, UserNotFoundException;
}
