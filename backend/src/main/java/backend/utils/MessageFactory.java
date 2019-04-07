package backend.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import backend.dto.ApiError;

public class MessageFactory {

    private static MessageFactory instance;

    public static  synchronized MessageFactory getInstance() {
        if (instance == null) {
            instance = new MessageFactory();
        }
        return instance;
    }

    public String getMessageAsJsonString(int code, String message) {
        return buildJsonString(code, message);
    }
    private String buildJsonString(int code, String errorMessage) {
        try {
            return new ObjectMapper()
                    .writeValueAsString(ApiError
                            .builder()
                            .code(code)
                            .message(errorMessage)
                            .build());
        } catch (JsonProcessingException e) {
            return "";
        }
    }
}
