package backend.service;

import backend.dto.question.QuestionDto;
import backend.dto.question.QuestionListDto;
import backend.exception.bad_request.UnsupportedQuestionType;
import backend.exception.not_found.TestNotFoundException;

public interface QuestionService {
    QuestionListDto getAll(int testId);
    QuestionListDto create(int testId, QuestionListDto questions) throws TestNotFoundException, UnsupportedQuestionType;
    QuestionDto create(int testId, QuestionDto questionDto) throws TestNotFoundException, UnsupportedQuestionType;
}
