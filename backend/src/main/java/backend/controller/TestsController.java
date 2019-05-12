package backend.controller;


import backend.dto.test.TestDto;
import backend.dto.test.TestListDto;
import backend.dto.test.TestUpdateData;
import backend.service.TestService;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity getTests(@ApiParam(hidden = true) @RequestHeader(value = "Authorization", required = false) String authorization) throws Exception {
        return ResponseEntity.ok(testService.getAllTests(authorization));
    }

    @ApiOperation(value = "Get test data",
            response = TestDto.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success."),
            @ApiResponse(code = 404, message = "Test not found."),
            @ApiResponse(code = 500, message = "Unknown error.")
    })
    @GetMapping("/{id}")
    public ResponseEntity getTest(@PathVariable int id) throws Exception {
        return ResponseEntity.ok(testService.getTest(id));
    }

    @ApiOperation(value = "Add test",
            response = TestDto.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success."),
            @ApiResponse(code = 401, message = "You are not authorized."),
            @ApiResponse(code = 403, message = "You haven't permissions."),
            @ApiResponse(code = 500, message = "Unknown error.")
    })
    @PostMapping()
    @PreAuthorize("hasAnyRole('MODERATOR', 'REDACTOR')")
    public ResponseEntity addTest(@RequestParam String username, @RequestBody TestDto testDto) {
        return ResponseEntity.ok(testService.addTest(username, testDto));
    }

    @ApiOperation(value = "Updates test", response = TestDto.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Test data updated."),
            @ApiResponse(code = 401, message = "You are not authorized."),
            @ApiResponse(code = 403, message = "You haven't permissions."),
            @ApiResponse(code = 404, message = "Test not found."),
            @ApiResponse(code = 500, message = "Unknown error.")
    })
    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('MODERATOR', 'REDACTOR')")
    public ResponseEntity update(
            @PathVariable int id,
            @RequestBody TestUpdateData updateData) throws Exception {
        return ResponseEntity.ok(testService.updateTest(id, updateData));
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
    public ResponseEntity deleteTest(
            @PathVariable("id") int id,
            @ApiParam(hidden = true) @RequestHeader(value = "Authorization", required = false) String authorization)
            throws Exception {
        testService.deleteTest(id, authorization);
        return ResponseEntity.noContent().build();
    }
}
