package backend.dto.test;

import lombok.*;

import java.util.List;

@Data
@Builder
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class CsvImportDto {
    private String status;
    private List<String> errors;
    public void addError(int column, String error) {
        status = "ERROR";
        errors.add("[" + column + "]" + error);
    }
}
