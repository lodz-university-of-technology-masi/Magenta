package backend.service;

import backend.exception.not_found.TestNotFoundException;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface FileExportService {
    String exportCsv(int id) throws TestNotFoundException;
}
