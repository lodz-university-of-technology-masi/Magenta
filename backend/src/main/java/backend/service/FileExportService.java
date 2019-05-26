package backend.service;

import backend.exception.not_found.TestNotFoundException;
import com.itextpdf.text.DocumentException;

import javax.servlet.ServletOutputStream;
import java.io.IOException;
import java.io.OutputStream;

public interface FileExportService {
    String exportCsv(int id) throws TestNotFoundException;

    OutputStream exportPdf(int id, ServletOutputStream outputStream) throws TestNotFoundException, DocumentException, IOException;
}
