package backend.controller;

import backend.dto.position.PositionDto;
import backend.dto.position.PositionListDto;
import backend.service.PositionService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/positions")
@Api(value = "Position management",
        basePath = "/api/positions",
        produces = "application/json",
        description = "Add, activate, deactivate,")
public class PositionController {

    @Autowired
    private PositionService positionService;

    @ApiOperation(value = "Get all position",
            response = PositionListDto.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success."),
            @ApiResponse(code = 401, message = "You are not authorized."),
            @ApiResponse(code = 403, message = "You haven't permissions."),
            @ApiResponse(code = 404, message = "User not found."),
            @ApiResponse(code = 500, message = "Unknown error.")
    })
    @GetMapping()
    public ResponseEntity getPositions() {
        return ResponseEntity.ok(positionService.getPositions());
    }

    @ApiOperation(value = "Add new position")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Not used."),
            @ApiResponse(code = 204, message = "Success"),
            @ApiResponse(code = 401, message = "You are not authorized."),
            @ApiResponse(code = 403, message = "You haven't permissions."),
            @ApiResponse(code = 500, message = "Unknown error."),
            @ApiResponse(code = 503, message = "Books service is unavailable.")
    })
    @PostMapping()
    @PreAuthorize("hasRole('MODERATOR')")
    public ResponseEntity addPosition(
            @RequestBody PositionDto positionDto) {
        positionService.addPosition(positionDto);
        return ResponseEntity.noContent().build();
    }

}
