package backend.service;

import backend.dto.test.FullTestDto;
import backend.dto.test.TestDto;
import backend.dto.test.TestListDto;
import backend.dto.test.TestUpdateData;
import backend.exception.forbidden.ForbiddenException;
import backend.exception.not_found.TestNotFoundException;

public interface TestService {

    TestListDto getAllTests(String authorizationToken);

    void deleteTest(int testId, String authorizationToken) throws ForbiddenException, TestNotFoundException;

    FullTestDto getTest(int id) throws TestNotFoundException;

    TestDto addTest(String username, TestDto testDto);

    FullTestDto updateTest(int id, TestUpdateData updateData) throws TestNotFoundException;
}
