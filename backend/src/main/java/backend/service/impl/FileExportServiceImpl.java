package backend.service.impl;

import backend.entity.Question;
import backend.entity.Test;
import backend.entity.VariantAnswer;
import backend.exception.not_found.TestNotFoundException;
import backend.repository.TestRepository;
import backend.service.FileExportService;
import com.google.common.collect.ImmutableMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static backend.entity.Question.*;

@Service
public class FileExportServiceImpl implements FileExportService {

    private static final Map<String, String> questionType = new ImmutableMap.Builder<String, String>()
            .put(TYPE_OPEN, "O")
            .put(TYPE_VARIANT, "W")
            .put(TYPE_SCALA, "S")
            .put(TYPE_NUMERIC, "L")
            .build();

    @Autowired
    private TestRepository testRepository;

    @Override
    public String exportCsv(int id) throws TestNotFoundException {
        Test test = testRepository.findById(id)
                .orElseThrow(TestNotFoundException::new);
        List<Question> questions = new ArrayList<>(test.getQuestions());

        StringBuilder csv = new StringBuilder();

        int i = 1;
        for (Question question : questions) {
            csv
                    .append(i)
                    .append(";")
                    .append(questionType.get(question.getType()))
                    .append(";")
                    .append(test.getLanguage())
                    .append(";")
                    .append(question.getQuestion())
                    .append(";");

            if (TYPE_OPEN.equals(question.getType()) || TYPE_NUMERIC.equals(question.getType())) {
                csv.append("|;");
            }
            if (TYPE_VARIANT.equals(question.getType())) {
                List<VariantAnswer> variants = new ArrayList<>(question.getVariants());
                for (VariantAnswer variant : variants) {
                    csv.append(variant.getText())
                            .append(";");
                }
            }
            if (TYPE_SCALA.equals(question.getType())) {
                csv.append(question.getScalaAnswer().getMin())
                        .append(";")
                        .append(question.getScalaAnswer().getMax())
                        .append(";");
            }
            csv.append("\n");
            i++;
        }

        return csv.toString();
    }
}
