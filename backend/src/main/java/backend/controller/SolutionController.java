package backend.controller;

import backend.dto.solution.SolutionDtoWithId;
import backend.dto.solution.SolutionWithIdListDto;
import backend.service.SolutionService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/solutions")
@Api(value = "User roles management",
        basePath = "/api/solutions",
        produces = "application/json",
        description = "Solutions")
public class SolutionController {
    @Autowired
    private SolutionService solutionService;

    @ApiOperation(value = "Get solution",
            response = SolutionDtoWithId.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success."),
            @ApiResponse(code = 401, message = "You are not authorized."),
            @ApiResponse(code = 403, message = "You haven't permissions."),
            @ApiResponse(code = 404, message = "Test not found."),
            @ApiResponse(code = 500, message = "Unknown error.")
    })
    @GetMapping("/{id}")
    public ResponseEntity get(
            @PathVariable int id) throws Exception {
        return ResponseEntity.ok(solutionService.get(id));
    }

    @ApiOperation(value = "Get solutions",
            response = SolutionWithIdListDto.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success."),
            @ApiResponse(code = 401, message = "You are not authorized."),
            @ApiResponse(code = 403, message = "You haven't permissions."),
            @ApiResponse(code = 404, message = "Test not found."),
            @ApiResponse(code = 500, message = "Unknown error.")
    })
    @GetMapping()
    public ResponseEntity getAll() throws Exception {
        return ResponseEntity.ok(solutionService.getAll());
    }
}
