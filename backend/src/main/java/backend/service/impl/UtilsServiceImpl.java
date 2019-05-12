package backend.service.impl;

import backend.utils.WikipediaUtils;
import backend.service.UtilsService;
import org.springframework.stereotype.Service;

@Service
public class UtilsServiceImpl implements UtilsService {

    @Override
    public String getWikipediaDefinition(String wantedText) {
        return WikipediaUtils.getWikipediaDefinition(wantedText);
    }
}
