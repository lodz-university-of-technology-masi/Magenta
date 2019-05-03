package backend.controller;

import backend.dto.user.UserListDto;
import backend.dto.user.UserLoginDetails;
import backend.dto.user.UserRegisterDetails;
import backend.dto.user.UserUpdateData;
import backend.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/redactors")
@Api(value = "User management",
        basePath = "/api/redactors",
        produces = "application/json",
        description = "Add, get, modify, delete redactors account")
public class RedactorRestController {

    @Autowired
    private UserService userService;

    @ApiOperation(value = "Get redactors data",
            response = UserListDto.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success."),
            @ApiResponse(code = 401, message = "You are not authorized."),
            @ApiResponse(code = 403, message = "You haven't permissions."),
            @ApiResponse(code = 404, message = "User not found."),
            @ApiResponse(code = 500, message = "Unknown error.")
    })
    @GetMapping()
    public ResponseEntity getRedactors() throws Exception {
        return ResponseEntity.ok(userService.getUsersDataByRole("REDACTOR"));
    }

    @ApiOperation(value = "Add new redactor",
            response = UserLoginDetails.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Not used."),
            @ApiResponse(code = 400, message = "User data not valid."),
            @ApiResponse(code = 401, message = "You are not authorized."),
            @ApiResponse(code = 403, message = "You haven't permissions."),
            @ApiResponse(code = 409, message = "User data not unique."),
            @ApiResponse(code = 500, message = "Unknown error."),
            @ApiResponse(code = 503, message = "Books service is unavailable.")
    })
    @PostMapping()
    @PreAuthorize("hasRole('MODERATOR')")
    public ResponseEntity addRedactor(
            @RequestBody UserRegisterDetails userRegisterDetails) throws Exception {
        UserLoginDetails loginDetails
                = userService.addUser(userRegisterDetails, "REDACTOR");
        return ResponseEntity.status(201).body(loginDetails);
    }

    @ApiOperation(value = "Updates redactors", response = UserLoginDetails.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "User data updated."),
            @ApiResponse(code = 400, message = "User data not valid."),
            @ApiResponse(code = 401, message = "You are not authorized."),
            @ApiResponse(code = 403, message = "You haven't permissions."),
            @ApiResponse(code = 404, message = "User not found."),
            @ApiResponse(code = 409, message = "User data not unique."),
            @ApiResponse(code = 500, message = "Unknown error.")
    })
    @PutMapping("/{username}")
    @PreAuthorize("hasRole('MODERATOR')")
    public ResponseEntity update(
            @PathVariable("username") String username,
            @RequestBody UserUpdateData userUpdateData) throws Exception {
        UserLoginDetails user =
                userService.updateUser(username, userUpdateData);
        return ResponseEntity.ok(user);
    }
}
