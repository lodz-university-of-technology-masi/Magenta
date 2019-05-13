package backend.utils;

import backend.dto.synonyms.SynonymDto;
import backend.exception.bad_request.BadSynonymRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

public class SynonymsUtils {

    public static List<String> getSynonyms(String baseWord) throws BadSynonymRequest {

        RestTemplate restTemplate = new RestTemplate();
        String url
                = "https://api.datamuse.com/words?ml=" + baseWord;
        ResponseEntity<SynonymDto[]> response
                = restTemplate.getForEntity(url, SynonymDto[].class);

        List<String> returnList = new ArrayList<>();
        if (response.getStatusCode().equals(HttpStatus.OK)) {
            SynonymDto[] synonyms = response.getBody();
            if (synonyms != null) {
                for (int i = 0; i < synonyms.length; i++) {
                    returnList.add(synonyms[i].getWord());
                    if (i == 9) {
                        break;
                    }
                }
            }
        } else {
            throw new BadSynonymRequest();
        }

        return returnList;
    }
}
