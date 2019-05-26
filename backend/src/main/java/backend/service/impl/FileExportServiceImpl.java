package backend.service.impl;

import backend.entity.Question;
import backend.entity.ScalaAnswer;
import backend.entity.Test;
import backend.entity.VariantAnswer;
import backend.exception.not_found.TestNotFoundException;
import backend.repository.TestRepository;
import backend.service.FileExportService;
import com.google.common.collect.ImmutableMap;
import com.itextpdf.text.*;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.PdfWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.ServletOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static backend.entity.Question.*;
import static com.itextpdf.text.pdf.PdfWriter.getInstance;

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

    @Override
    public OutputStream exportPdf(int id, ServletOutputStream outputStream) throws TestNotFoundException, DocumentException, IOException {
        Test test = testRepository.findById(id)
                .orElseThrow(TestNotFoundException::new);
        BaseFont baseFont = BaseFont.createFont(BaseFont.HELVETICA, BaseFont.CP1250, BaseFont.EMBEDDED);
        Font font = new Font(baseFont, 14);
        Document document = new Document();
        PdfWriter pdfWriter = getInstance(document, outputStream);
        document.open();
        Paragraph paragraph = new Paragraph("Test", font);
        List<Question> questions = new ArrayList<>(test.getQuestions());
        int i = 1;
        for (Question question : questions) {
            paragraph.add(new Chunk("\n" + i + ". " + question.getQuestion()));
            if (TYPE_OPEN.equals(question.getType())){
                paragraph.add(new Chunk("\n \n \n"));
            }
            if(TYPE_NUMERIC.equals(question.getType())){
                paragraph.add(new Chunk("(N) \n"));
            }
            if (TYPE_VARIANT.equals(question.getType())) {
                List<VariantAnswer> variants = new ArrayList<>(question.getVariants());
                for (VariantAnswer variant : variants) {
                    paragraph.add(new Chunk("\n" + variant.getText()));
                }
            }
            if (TYPE_SCALA.equals(question.getType())) {
                paragraph.add(new Chunk( printRange(question.getScalaAnswer())));
            }
            i++;
        }
        document.add(paragraph);
        document.close();
        pdfWriter.close();
        return outputStream;
    }

    private String printRange(ScalaAnswer scalaAnswer) {
        StringBuilder range = new StringBuilder();
        range.append("\n");
        for (int i = scalaAnswer.getMin(); i <= scalaAnswer.getMax(); i++) {
            range.append(i).append("    ");
        }
        range.append("\n");
        return range.toString();
    }
}
