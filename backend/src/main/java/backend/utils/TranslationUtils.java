package backend.utils;

import backend.dto.synonyms.SynonymDto;
import backend.dto.translation.TranslationResponseDto;
import backend.exception.bad_request.BadSynonymRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.Objects;

import static backend.utils.Constans.TRANSLATION_API_KEY;

/**
 * THIS CLASS USES FREE TRANSLATION API BUT IT CAN HANDLE ONLY 1 000 000 CHARS PLEASE USE CAREFULLY ;)
 */
public class TranslationUtils {

    public static String getTranslation(String textToTranslate, boolean translateToPolish) {
        String url = getUrl(textToTranslate, translateToPolish);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<TranslationResponseDto> response
                = restTemplate.getForEntity(url, TranslationResponseDto.class);

        StringBuilder returnStringBuilder = new StringBuilder();
        if (response.getStatusCode().equals(HttpStatus.OK)) {
            Objects.requireNonNull(response.getBody()).getText().forEach(returnStringBuilder::append);
        } else {

        }

        return returnStringBuilder.toString();
    }


    private static String getUrl(String textToTranslate, boolean translateToPolish) {
        return "https://translate.yandex.net/api/v1.5/tr.json/translate?key=" +
                TRANSLATION_API_KEY +
                "&text=" +
                textToTranslate +
                "&lang=" +
                getTranslationString(translateToPolish);
    }

    private static String getTranslationString(boolean translateToPolish) {
        if (translateToPolish) {
            return Constans.TRANSLATE_TO_POLISH;
        } else {
            return Constans.TRANSLATE_TO_ENGLISH;
        }
    }
}
