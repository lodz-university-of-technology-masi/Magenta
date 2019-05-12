package backend.service;

import backend.exception.not_found.WikipediaDefinitionNotFound;

public interface UtilsService {
    String getWikipediaDefinition(String wantedText, String language) throws WikipediaDefinitionNotFound;
}
