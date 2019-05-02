package backend.service;

import backend.dto.user.UserData;
import backend.dto.user.UserRegisterDetails;
import backend.exception.CustomException;
import backend.exception.forbidden.ForbiddenException;
import org.springframework.data.domain.Page;

public interface RedactorService {
    Page<UserData> getRedactorsData(int page, int pageSize) throws CustomException;

    void canPerformOperation(String username, String authorizationToken) throws ForbiddenException;

    void addRedactor(String username, UserRegisterDetails userRegisterData, String authorization) throws CustomException;
}
