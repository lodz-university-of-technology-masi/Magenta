package backend.utils;

import backend.dto.synonyms.SynonymDto;
import backend.dto.synonyms.SynonymResponseDto;
import backend.exception.bad_request.BadSynonymRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class SynonymsUtils {

    public static List<String> getSynonyms(String baseWord) throws BadSynonymRequest {

        RestTemplate restTemplate = new RestTemplate();
        String fooResourceUrl
                = "https://api.datamuse.com/words?ml=" + baseWord;
        ResponseEntity<SynonymResponseDto> response
                = restTemplate.getForEntity(fooResourceUrl, SynonymResponseDto.class);

        List<String> returnList = new ArrayList<>();
        if (response.getStatusCode().equals(HttpStatus.OK)) {
            List<SynonymDto> synonyms = Objects.requireNonNull(response.getBody()).getSynonyms();
            synonyms.forEach(synonym ->
                    returnList.add(synonym.getWord())
            );
        } else {
            throw new BadSynonymRequest();
        }

        return returnList;
    }
}
