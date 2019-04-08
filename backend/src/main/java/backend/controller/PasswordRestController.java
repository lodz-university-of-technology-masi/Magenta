package backend.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import backend.dto.user.password.ResetPasswordDto;
import backend.service.PasswordService;

@RestController
@RequestMapping("/api/password")
@Api(value = "Any user management",
        basePath = "/api/password",
        produces = "application/json",
        description = "Reset password")
public class PasswordRestController {
    @Autowired
    private PasswordService passwordService;

    @ApiOperation(value = "Reset password")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Not used."),
            @ApiResponse(code = 204, message = "Ok."),
            @ApiResponse(code = 401, message = "Not used."),
            @ApiResponse(code = 403, message = "Not used."),
            @ApiResponse(code = 404, message = "Not used."),
            @ApiResponse(code = 500, message = "Unknown error"),
    })
    @PostMapping("/reset")
    public ResponseEntity resetPassword(@RequestBody ResetPasswordDto passwordResetRequest) throws Exception {
        passwordService.resetPassword(passwordResetRequest);
        return ResponseEntity.noContent().build();
    }
}
