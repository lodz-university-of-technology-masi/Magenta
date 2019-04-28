package backend.controller;

import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import backend.dto.user.*;
import backend.security.TokenAuthentication;
import backend.service.RoleService;
import backend.service.UserService;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api/users")
@Api(value = "User management",
        basePath = "/api/users",
        produces = "application/json",
        description = "Register, get, modify, delete user account")
public class UsersRestController {
    public abstract class UserPage implements Page<UserData> {

    }
    @Autowired
    private UserService userService;

    @Autowired
    private RoleService roleService;

    @Autowired
    private TokenAuthentication tokenAuthenticationUtils;

    @ApiOperation(value = "Get users data",
            response = UserPage.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success."),
            @ApiResponse(code = 401, message = "You are not authorized."),
            @ApiResponse(code = 403, message = "You haven't permissions."),
            @ApiResponse(code = 404, message = "User not found."),
            @ApiResponse(code = 500, message = "Unknown error.")
    })
    @GetMapping()
    public ResponseEntity getUsers(@ApiParam() @RequestParam(value = "page", required = false, defaultValue = "0") int page,
                                   @ApiParam() @RequestParam(value = "size", required = false, defaultValue = "10") int pageSize) throws Exception {
        return ResponseEntity.ok(userService.getUsersData(page, pageSize));
    }

    @ApiOperation(value = "Register new user.",
            response = UserLoginDetails.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Not used."),
            @ApiResponse(code = 400, message = "User data not valid."),
            @ApiResponse(code = 409, message = "User data not unique."),
            @ApiResponse(code = 500, message = "Unknown error."),
            @ApiResponse(code = 503, message = "Books service is unavailable.")
    })
    @PostMapping()
    public ResponseEntity register(
            @RequestBody UserRegisterDetails userRegisterDetails,
            HttpServletResponse response) throws Exception {
        UserLoginDetails loginDetails
                = userService.addUser(userRegisterDetails, "USER");
        response.addHeader(TokenAuthentication.HEADER_STRING,
                tokenAuthenticationUtils.buildToken(
                        loginDetails.getUsername(),
                        tokenAuthenticationUtils.getAuthoritiesSeparatedByComaFromRoles(
                                loginDetails.getRoles())
                ));
        return ResponseEntity.status(201)
            .body(loginDetails);
    }

    @ApiOperation(value = "Updates user", response = UserLoginDetails.class)
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
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity update(
            @PathVariable("username") String username,
            @ApiParam(hidden = true) @RequestHeader(value = "Authorization", required = false) String authorization,
            @RequestBody UserUpdateData userUpdateData,
            HttpServletResponse response) throws Exception {
        UserLoginDetails user =
                userService.updateUser(username, userUpdateData, authorization);
        response.addHeader(TokenAuthentication.HEADER_STRING,
                tokenAuthenticationUtils.buildToken(
                        userUpdateData.getUsername(),
                        tokenAuthenticationUtils.getAuthoritiesSeparatedByComaFromRoles(
                                roleService.getUserRoles(username).getRoles())

                ));
        return ResponseEntity.ok(user);
    }
    @ApiOperation(value = "Get user data",
            response = UserData.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success."),
            @ApiResponse(code = 401, message = "You are not authorized."),
            @ApiResponse(code = 403, message = "You haven't permissions."),
            @ApiResponse(code = 404, message = "User not found."),
            @ApiResponse(code = 500, message = "Unknown error.")
    })
    @GetMapping("/{username}")
    public ResponseEntity getUserUpdateInfo(
            @PathVariable("username") String username,
            @ApiParam(hidden = true) @RequestHeader(value = "Authorization", required = false) String authorization) throws Exception {
        return ResponseEntity.ok(userService.getUserData(username, authorization));
    }
    @ApiOperation(value = "Deletes user")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Not used."),
            @ApiResponse(code = 204, message = "User deleted."),
            @ApiResponse(code = 401, message = "You are not authorized."),
            @ApiResponse(code = 403, message = "You haven't permissions."),
            @ApiResponse(code = 500, message = "Unknown error.")
    })
    @DeleteMapping("/{username}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity deleteUser(
            @PathVariable("username") String username,
            @ApiParam(hidden = true) @RequestHeader(value = "Authorization", required = false) String authorization)
            throws Exception {
        userService.deleteUser(username, authorization);
        return ResponseEntity.noContent().build();
    }
}
