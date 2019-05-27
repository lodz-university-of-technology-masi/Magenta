package backend.controller;

import backend.dto.solution.SolutionScoreDto;
import backend.dto.solution.SolutionDtoWithId;
import backend.dto.solution.SolutionWithIdListDto;
import backend.security.TokenAuthenticationUtils;
import backend.service.SolutionService;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
    public ResponseEntity getAll(
            @ApiParam(hidden = true) @RequestHeader(value = "Authorization", required = false) String authorization
    ) throws Exception {
        return ResponseEntity.ok(solutionService.getAllForRedactor(authorization));
    }

    @ApiOperation(value = "Set test score",
            response = SolutionDtoWithId.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success."),
            @ApiResponse(code = 401, message = "You are not authorized."),
            @ApiResponse(code = 403, message = "You haven't permissions."),
            @ApiResponse(code = 404, message = "Test not found."),
            @ApiResponse(code = 500, message = "Unknown error.")
    })
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('REDACTOR')")
    public ResponseEntity create(@PathVariable int id,
                                 @RequestBody SolutionScoreDto solutionScoreDto) throws Exception {
        return ResponseEntity.ok(solutionService.updateScore(id, solutionScoreDto));
    }

    @ApiOperation(value = "Send email with store")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Not used."),
            @ApiResponse(code = 204, message = "Success"),
            @ApiResponse(code = 401, message = "You are not authorized."),
            @ApiResponse(code = 403, message = "You haven't permissions."),
            @ApiResponse(code = 404, message = "Test not found."),
            @ApiResponse(code = 500, message = "Unknown error.")
    })
    @PostMapping("/{id}/email")
    @PreAuthorize("hasRole('REDACTOR')")
    public ResponseEntity sendEmail(@PathVariable int id) throws Exception {
        solutionService.sendEmail(id);
        return ResponseEntity.noContent().build();
    }
}
