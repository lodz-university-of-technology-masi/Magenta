package backend.utils;

import backend.dto.synonyms.SynonymResponse;
import backend.exception.bad_request.BadSynonymRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

public class SynonymsUtils {

    public static List<String> getSynonyms(String baseWord, String language) throws BadSynonymRequest {

        RestTemplate restTemplate = new RestTemplate();
        String url
                = Constans.SYNONYMS.BASE_URL + "?word=" + baseWord + "&language=" + getLanguageCode(language) + "&key=DU24l3Q1lMMzlmRTD3h5&output=json";

        ResponseEntity<SynonymResponse> response;

        try {
            response = restTemplate.getForEntity(url, SynonymResponse.class);
        } catch (Exception e) {
            throw new BadSynonymRequest();
        }


        List<String> returnList = new ArrayList<>();

        if (response.getStatusCode().equals(HttpStatus.OK)) {
            SynonymResponse synonyms = response.getBody();
            if (synonyms != null) {
                synonyms.getResponse().forEach(synonym -> returnList.add(synonym.getList().getSynonyms() + "\n"));
            }

        } else {
            throw new BadSynonymRequest();
        }

        return returnList;
    }

    private static String getLanguageCode(String language) {
        if (language.equals("pl")) {
            return Constans.SYNONYMS.PL_CODE;
        } else {
            return Constans.SYNONYMS.EN_CODE;
        }
    }
}
