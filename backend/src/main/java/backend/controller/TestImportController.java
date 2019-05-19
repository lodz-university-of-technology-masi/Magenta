package backend.controller;


import backend.dto.test.CsvImportDto;
import backend.service.FileImportService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/tests")
@Api(value = "Test management",
        basePath = "/api/tests",
        produces = "application/json",
        description = "Tests import")
public class TestImportController {
    @Autowired
    private FileImportService fileImportService;


    @ApiOperation(value = "Add test from csv file",
            response = CsvImportDto.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success."),
            @ApiResponse(code = 401, message = "You are not authorized."),
            @ApiResponse(code = 403, message = "You haven't permissions."),
            @ApiResponse(code = 500, message = "Unknown error.")
    })
    @PostMapping("/import")
    @PreAuthorize("hasAnyRole('REDACTOR')")
    public ResponseEntity addTestFromCsv(MultipartFile file) throws Exception {
        return ResponseEntity.ok(fileImportService.addTest(file));
    }
}
