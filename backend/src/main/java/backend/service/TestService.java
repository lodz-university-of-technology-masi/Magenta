package backend.service;

import backend.dto.test.TestListDto;
import backend.exception.forbidden.ForbiddenException;
import backend.exception.not_found.TestNotFoundException;

public interface TestService {

    TestListDto getAllTests();

    void deleteTest(int testId, String authorizationToken) throws ForbiddenException, TestNotFoundException;
}
