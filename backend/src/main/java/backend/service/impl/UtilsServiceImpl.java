package backend.service.impl;

import backend.exception.not_found.WikipediaDefinitionNotFound;
import backend.utils.WikipediaUtils;
import backend.service.UtilsService;
import org.springframework.stereotype.Service;

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
}
