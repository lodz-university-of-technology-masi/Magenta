package backend.controller;

import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import backend.dto.user.password.PasswordChangeDto;
import backend.service.PasswordService;

@RestController
@RequestMapping("/api/users/{username}/password")
@Api(value = "User password management",
        basePath = "/api/users/{username}/password",
        produces = "application/json",
        description = "Change user password")
public class UsersPasswordRestController {
    @Autowired
    private PasswordService passwordService;

    @ApiOperation(value = "Change password for user with given id.")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Not used."),
            @ApiResponse(code = 204, message = "Success"),
            @ApiResponse(code = 401, message = "You are not authorized."),
            @ApiResponse(code = 403, message = "You haven't permissions or old password is wrong"),
            @ApiResponse(code = 404, message = "User not found."),
            @ApiResponse(code = 500, message = "Unknown error.")
    })
    @PostMapping()
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity resetPassword(
            @PathVariable("username") String username,
            @RequestBody PasswordChangeDto passwordChange,
            @ApiParam(hidden = true) @RequestHeader(value = "Authorization", required = false) String authorization)
            throws Exception {
        passwordService.changePassword(username, passwordChange, authorization);
        return ResponseEntity.noContent().build();
    }
}
