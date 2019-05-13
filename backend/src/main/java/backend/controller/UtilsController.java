package backend.controller;

import backend.exception.not_found.WikipediaDefinitionNotFound;

import backend.service.UtilsService;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    @GetMapping("wikipedia")
    public String getDefinition(
            @RequestParam String wantedText,
            @RequestParam(required = false, defaultValue = "pl") String language)
            throws WikipediaDefinitionNotFound {
        return utilsService.getWikipediaDefinition(wantedText, language);
    }
}
