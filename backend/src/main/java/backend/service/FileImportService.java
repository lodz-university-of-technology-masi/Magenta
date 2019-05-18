package backend.service;

import backend.dto.test.CsvImportDto;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface FileImportService {
    CsvImportDto addTest(MultipartFile file) throws IOException;
}
