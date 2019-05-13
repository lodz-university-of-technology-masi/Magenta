package backend.service;

import backend.exception.bad_request.BadSynonymRequest;
import backend.exception.not_found.WikipediaDefinitionNotFound;

import java.util.List;

public interface UtilsService {
    String getWikipediaDefinition(String wantedText, String language) throws WikipediaDefinitionNotFound;

    List<String> getSynonyms(String baseWord) throws BadSynonymRequest;
}
