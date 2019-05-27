package backend.service;

import backend.dto.test.CsvImportDto;
import backend.exception.not_found.UserNotFoundException;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface FileImportService {
    CsvImportDto addTest(MultipartFile file, String authorization) throws IOException, UserNotFoundException;
}
