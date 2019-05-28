package backend.service;

import backend.exception.bad_request.BadSynonymRequest;
import backend.exception.bad_request.BadTranslationRequest;
import backend.exception.not_found.WikipediaDefinitionNotFound;

import java.util.List;

public interface UtilsService {
    String getWikipediaDefinition(String wantedText, String language) throws WikipediaDefinitionNotFound;

    List<String> getSynonyms(String baseWord, String language) throws BadSynonymRequest;

    String getTranslation(String textToTranslate, boolean translateToPolish) throws BadTranslationRequest;
}
