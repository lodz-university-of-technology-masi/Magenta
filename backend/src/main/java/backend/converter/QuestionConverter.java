package backend.converter;

import backend.dto.question.QuestionDto;
import backend.dto.question.VariantAnswerDto;
import backend.entity.Question;
import backend.entity.ScalaAnswer;
import backend.entity.VariantAnswer;

import java.util.ArrayList;
import java.util.Set;

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
    public static VariantAnswerDto getVariantAnswerDto(VariantAnswer variantAnswerDto) {
        return mapper.map(variantAnswerDto, VariantAnswerDto.class);
    }

    public static void attachScala(QuestionDto questionDto, ScalaAnswer scalaAnswer) {
        mapper.map(scalaAnswer, questionDto);
    }

    public static void attachVariants(QuestionDto questionDto, Set<VariantAnswer> variants) {
        questionDto.setVariants(new ArrayList<>(variants.size()));
        for (VariantAnswer variant:
             variants) {
            questionDto.getVariants()
                    .add(getVariantAnswerDto(variant));
        }
    }
}
