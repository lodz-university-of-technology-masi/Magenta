package backend.dto.question;

import lombok.*;

import java.util.List;

@Data
@Builder
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class QuestionDto {
    private String question;
    private String type;

    private int min;
    private int max;

    private List<VariantAnswerDto> variants;
}
