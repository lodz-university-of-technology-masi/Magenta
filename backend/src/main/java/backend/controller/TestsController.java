package backend.controller;


import backend.dto.test.TestListDto;
import backend.service.TestService;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tests")
@Api(value = "Test management",
        basePath = "/api/tests",
        produces = "application/json",
        description = "Tests")
public class TestsController {

    @Autowired
    private TestService testService;

    @ApiOperation(value = "Get tests data",
            response = TestListDto.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success."),
            @ApiResponse(code = 401, message = "You are not authorized."),
            @ApiResponse(code = 403, message = "You haven't permissions."),
            @ApiResponse(code = 404, message = "User not found."),
            @ApiResponse(code = 500, message = "Unknown error.")
    })
    @GetMapping()
    public ResponseEntity getTests() throws Exception {
        return ResponseEntity.ok(testService.getAllTests());
    }

    @ApiOperation(value = "Deletes test")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Not used."),
            @ApiResponse(code = 204, message = "User deleted."),
            @ApiResponse(code = 401, message = "You are not authorized."),
            @ApiResponse(code = 403, message = "You haven't permissions."),
            @ApiResponse(code = 500, message = "Unknown error.")
    })
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('REDACTOR')")
    public ResponseEntity deleteTest(
            @PathVariable("id") int id,
            @ApiParam(hidden = true) @RequestHeader(value = "Authorization", required = false) String authorization)
            throws Exception {
        testService.deleteTest(id, authorization);
        return ResponseEntity.noContent().build();
    }
}
