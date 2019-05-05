package backend.service;

import backend.dto.test.TestListDto;
import backend.exception.forbidden.ForbiddenException;

public interface TestService {
    TestListDto getAllTests();
    void deleteTest(int id, String authorizationToken) throws ForbiddenException;

}
