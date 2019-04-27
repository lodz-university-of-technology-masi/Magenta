package backend.converter;

import backend.dto.question.QuestionDto;
import backend.dto.question.VariantAnswerDto;
import backend.entity.Question;
import backend.entity.ScalaAnswer;
import backend.entity.VariantAnswer;

public class QuestionConverter extends ConverterBase {
    public static Question getQuestion(QuestionDto questionDto) {
        return mapper.map(questionDto, Question.class);
    }
    public static QuestionDto getQuestionDto(Question question) {
        return mapper.map(question, QuestionDto.class);
    }

    public static ScalaAnswer getScalaAnswer(QuestionDto scalaAnswerDto) {
        return mapper.map(scalaAnswerDto, ScalaAnswer.class);
    }

    public static VariantAnswer getVariantAnswer(VariantAnswerDto variantAnswerDto) {
        return mapper.map(variantAnswerDto, VariantAnswer.class);
    }
    public static VariantAnswerDto getVariantAnswerDto(VariantAnswerDto variantAnswerDto) {
        return mapper.map(variantAnswerDto, VariantAnswerDto.class);
    }
}
