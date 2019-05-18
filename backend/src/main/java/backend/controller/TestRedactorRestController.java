package backend.controller;

import backend.dto.test.TestListDto;
import backend.service.TestRedactorService;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tests/{id}/redactor")
@Api(value = "Test management",
        basePath = "/api/tests",
        produces = "application/json",
        description = "Assign redactor to test")
public class TestRedactorRestController {
    @Autowired
    private TestRedactorService testRedactorService;

    @ApiOperation(value = "Assign redactor to test")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Not used."),
            @ApiResponse(code = 201, message = "Not used."),
            @ApiResponse(code = 401, message = "You are not authorized."),
            @ApiResponse(code = 403, message = "You haven't permissions."),
            @ApiResponse(code = 404, message = "User not found."),
            @ApiResponse(code = 500, message = "Unknown error.")
    })
    @GetMapping()
    public ResponseEntity getTests(@PathVariable("id") int id,
                                   @RequestParam("username") String username) throws Exception {
        testRedactorService.assign(id, username);
        return ResponseEntity.noContent().build();
    }
}
