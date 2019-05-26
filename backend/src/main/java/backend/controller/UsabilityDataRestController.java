package backend.controller;

import backend.dto.usabilitydata.UsabilityDataDto;
import backend.service.UsabilityDataService;
import backend.utils.MetricsUtils;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@RestController
@RequestMapping("/api/metrics")
@Api(value = "Usability data",
        basePath = "/api/metrics",
        produces = "application/json",
        description = "Persist usability data")
public class UsabilityDataRestController {

    private final UsabilityDataService usabilityDataService;


    @Autowired
    public UsabilityDataRestController(UsabilityDataService usabilityDataService) {
        this.usabilityDataService = usabilityDataService;
    }


    @PostMapping()
    @ApiOperation(value = "Persist usability data")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success."),
            @ApiResponse(code = 401, message = "You are not authorized."),
            @ApiResponse(code = 403, message = "You haven't permissions."),
            @ApiResponse(code = 500, message = "Unknown error.")
    })
    public ResponseEntity persistUsabilityData(@RequestBody final UsabilityDataDto usabilityDataDto, final HttpServletRequest request) {
        usabilityDataService.persist(usabilityDataDto, MetricsUtils.getUserName(request), MetricsUtils.getClientIpAddress(request));
        return ResponseEntity.ok().build();
    }

    @PostMapping("/screen")
    public ResponseEntity handleScreenUpload(@RequestBody final String imageValue, final HttpServletRequest request) {
        try {
            usabilityDataService.saveScreenshot(imageValue, MetricsUtils.getUserName(request));
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return ResponseEntity.ok().build();
    }

}
