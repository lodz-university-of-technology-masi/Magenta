package backend.controller;

import backend.service.FileExportService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.io.OutputStream;

@RestController
@RequestMapping("/api/tests/export")
@Api(value = "Test management",
        basePath = "/api/tests/exportCsv",
        produces = "application/json",
        description = "Tests import")
public class TestExportController {
    @Autowired
    private FileExportService fileExportService;

    @ApiOperation(value = "Export test to csv file",
            response = String.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success."),
            @ApiResponse(code = 401, message = "You are not authorized."),
            @ApiResponse(code = 403, message = "You haven't permissions."),
            @ApiResponse(code = 500, message = "Unknown error.")
    })
    @GetMapping("/{id}/csv")
    @PreAuthorize("hasRole('REDACTOR')")
    public ResponseEntity exportCsvFile(@PathVariable int id) throws Exception {
        return ResponseEntity.ok()
                .header("Content-Type", "text/csv")
                .header("Content-Disposition", "attachment;filename=test.csv")
                .body(fileExportService.exportCsv(id));
    }

    @ApiOperation(value = "Export test to PDF file", response = OutputStream.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success."),
            @ApiResponse(code = 401, message = "You are not authorized."),
            @ApiResponse(code = 403, message = "You haven't permissions."),
            @ApiResponse(code = 500, message = "Unknown error.")
    })
    @GetMapping("/{id}/pdf")
    @PreAuthorize("hasRole('REDACTOR')")
    public ResponseEntity exportPdfFile(@PathVariable int id, HttpServletResponse response) throws Exception {
        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_PDF)
                .header("Content-Disposition", "attachment;filename=test.pdf")
                .body(fileExportService.exportPdf(id, response.getOutputStream()));
    }
}
