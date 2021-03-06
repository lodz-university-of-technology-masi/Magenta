package backend.service;

import backend.dto.test.*;
import backend.exception.bad_request.BadTranslationRequest;
import backend.exception.bad_request.UnsupportedQuestionType;
import backend.exception.forbidden.ForbiddenException;
import backend.exception.not_found.TestNotFoundException;

public interface TestService {

    TestListDto getAllTests(String authorizationToken);

    void deleteTest(int testId, String authorizationToken) throws ForbiddenException, TestNotFoundException;

    FullTestDto getTest(int id) throws TestNotFoundException;

    TestDto addTest(String username, TestDto testDto);

    FullTestDto updateTest(int id, TestUpdateData updateData) throws TestNotFoundException;

    FullTestDto translateTest(int id, boolean translateToPolish, String username) throws TestNotFoundException, BadTranslationRequest, UnsupportedQuestionType;;
}
