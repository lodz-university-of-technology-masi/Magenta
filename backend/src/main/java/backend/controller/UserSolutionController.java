package backend.controller;

import backend.dto.solution.SolutionDto;
import backend.dto.solution.SolutionDtoWithId;
import backend.dto.solution.SolutionWithIdListDto;
import backend.service.SolutionService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users/{username}/solutions")
@Api(value = "User roles management",
        basePath = "/api/users/{username}/solutions",
        produces = "application/json",
        description = "User solutions")
public class UserSolutionController {
    @Autowired
    private SolutionService solutionService;

    @ApiOperation(value = "Get solution for user",
            response = SolutionWithIdListDto.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success."),
            @ApiResponse(code = 401, message = "You are not authorized."),
            @ApiResponse(code = 403, message = "You haven't permissions."),
            @ApiResponse(code = 404, message = "Test not found."),
            @ApiResponse(code = 500, message = "Unknown error.")
    })
    @GetMapping()
    public ResponseEntity getAll(
            @PathVariable String username) throws Exception {
        return ResponseEntity.ok(solutionService.getAll(username));
    }
    @ApiOperation(value = "Resolve test",
            response = SolutionDtoWithId.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Not used."),
            @ApiResponse(code = 201, message = "Success."),
            @ApiResponse(code = 401, message = "You are not authorized."),
            @ApiResponse(code = 403, message = "You haven't permissions."),
            @ApiResponse(code = 404, message = "Test not found."),
            @ApiResponse(code = 500, message = "Unknown error.")
    })
    @PostMapping()
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity create(@PathVariable String username,
                                  @RequestBody SolutionDto solutionDto) throws Exception {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(solutionService.create(username, solutionDto));
    }
}
