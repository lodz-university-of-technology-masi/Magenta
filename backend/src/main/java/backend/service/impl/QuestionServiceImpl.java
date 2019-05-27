package backend.service.impl;

import backend.converter.QuestionConverter;
import backend.dto.question.*;
import backend.entity.Question;
import backend.entity.ScalaAnswer;
import backend.entity.Test;
import backend.entity.VariantAnswer;
import backend.exception.bad_request.UnsupportedQuestionType;
import backend.exception.not_found.TestNotFoundException;
import backend.repository.QuestionRepository;
import backend.repository.TestRepository;
import backend.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    private TestRepository testRepository;

    @Autowired
    private QuestionRepository questionRepository;

    @Override
    public QuestionListDto getAll(int testId) throws TestNotFoundException {
        Test test = getTest(testId);
        List<QuestionDto> result = new ArrayList<>(test.getQuestions().size());
        for (Question question :
                test.getQuestions()) {
            switch (question.getType()) {
                case Question.TYPE_NUMERIC:
                case Question.TYPE_OPEN: {
                    result.add(QuestionConverter.getQuestionDto(question));
                    break;
                }
                case Question.TYPE_SCALA: {
                    QuestionDto questionDto = QuestionConverter.getQuestionDto(question);
                    QuestionConverter.attachScala(questionDto, question.getScalaAnswer());
                    result.add(questionDto);
                    break;
                }
                case Question.TYPE_VARIANT: {
                    QuestionDto questionDto = QuestionConverter.getQuestionDto(question);
                    QuestionConverter.attachVariants(questionDto, question.getVariants());
                    result.add(questionDto);
                    break;
                }
            }
        }
        return QuestionListDto.builder()
                .questions(result)
                .build();
    }

    @Override
    public QuestionListDto create(int testId, QuestionListDto questions) throws TestNotFoundException, UnsupportedQuestionType {
        List<QuestionDto> result = new ArrayList<>(questions.getQuestions().size());
        Test test = getTest(testId);
        if (test.getQuestions() != null) {
            test.getQuestions().clear();
        } else {
            test.setQuestions(new HashSet<>());
        }

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

        if (questionDto.getType().equals(Question.TYPE_SCALA)) {
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
        question.setVariants(new HashSet<>(questionDto.getVariants().size()));
        questionDto.getVariants().forEach(item -> {
            VariantAnswer variantAnswer = QuestionConverter.getVariantAnswer(item);
            question.getVariants().add(variantAnswer);
            variantAnswer.setQuestion(question);
            questionRepository.save(question);
        });
    }


}
