package backend.service.impl;

import backend.converter.QuestionConverter;
import backend.dto.question.*;
import backend.entity.Question;
import backend.entity.ScalaAnswer;
import backend.entity.Test;
import backend.entity.VariantAnswer;
import backend.exception.bad_request.UnsupportedQuestionType;
import backend.exception.not_found.TestNotFoundException;
import backend.repository.TestRepository;
import backend.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    private TestRepository testRepository;

    @Override
    public QuestionListDto getAll(int testId) {
        return null;
    }

    @Override
    public QuestionListDto create(int testId, QuestionListDto questions) throws TestNotFoundException, UnsupportedQuestionType {
        List<QuestionDto> result = new ArrayList<>(questions.getQuestions().size());
        Test test = getTest(testId);
        test.getQuestions().clear();

        for (QuestionDto item : questions.getQuestions()) {
            result.add(create(test, item));
        }

        return QuestionListDto.builder()
                .questions(result)
                .build();
    }

    @Override
    public QuestionDto create(int testId, QuestionDto questionDto) throws TestNotFoundException, UnsupportedQuestionType {
        return create(
                getTest(testId),
                questionDto
        );
    }
    private Test getTest(int id) throws TestNotFoundException {
        return testRepository.findById(id)
                .orElseThrow(TestNotFoundException::new);
    }
    private QuestionDto create(Test test, QuestionDto questionDto) throws UnsupportedQuestionType {
        Question question = QuestionConverter.getQuestion(questionDto);

        if(questionDto.getType().equals(Question.TYPE_SCALA)) {
            addScalaAnswer(questionDto, question);
        } else if (question.getType().equals(Question.TYPE_VARIANT)) {
            addVariantQuestion(questionDto, question);
        }
        test.getQuestions().add(question);
        question.setTest(test);
        testRepository.save(test);
        return questionDto;
    }

    private void addScalaAnswer(QuestionDto questionDto, Question question) {
        ScalaAnswer scalaAnswer = QuestionConverter.getScalaAnswer(questionDto);
        question.setScalaAnswer(scalaAnswer);
        scalaAnswer.setQuestion(question);
    }

    private void addVariantQuestion(QuestionDto questionDto, Question question) {
        Set<VariantAnswer> variantAnswers = new HashSet<>(questionDto.getVariants().size());
        questionDto.getVariants().forEach(item -> {
            VariantAnswer variantAnswer = QuestionConverter.getVariantAnswer(item);
            variantAnswers.add(variantAnswer);
            variantAnswer.setQuestion(question);
        });
        question.setVariants(variantAnswers);
    }


}
