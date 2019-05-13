package backend.service.impl;

import backend.exception.bad_request.BadSynonymRequest;
import backend.exception.not_found.WikipediaDefinitionNotFound;
import backend.utils.SynonymsUtils;
import backend.utils.WikipediaUtils;
import backend.service.UtilsService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UtilsServiceImpl implements UtilsService {

    @Override
    public String getWikipediaDefinition(String wantedText, String language) throws WikipediaDefinitionNotFound {
        String result = WikipediaUtils.getWikipediaDefinition(wantedText, language);
        if (result.isEmpty()) {
            throw new WikipediaDefinitionNotFound();
        } else {
            return result;
        }
    }

    @Override
    public List<String> getSynonyms(String baseWord) throws BadSynonymRequest {
        return SynonymsUtils.getSynonyms(baseWord);
    }
}
