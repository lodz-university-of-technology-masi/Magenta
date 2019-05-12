package backend.controller;

import backend.service.UtilsService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/utils")
@Api(value = "Tests utils",
        basePath = "/api/utils",
        produces = "application/json",
        description = "Utils")
public class UtilsController {

    @Autowired
    private UtilsService utilsService;

    @ApiOperation(value = "Get wiki definition",
            response = String.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success."),
            @ApiResponse(code = 404, message = "Definition not found."),
            @ApiResponse(code = 500, message = "Unknown error.")
    })
    @GetMapping("wikipedia/{wantedText}")
    public String getTest(@PathVariable String wantedText) {
        return utilsService.getWikipediaDefinition(wantedText);
    }
}
