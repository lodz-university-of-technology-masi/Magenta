package backend.controller;

import backend.dto.question.QuestionDto;
import backend.dto.question.QuestionListDto;
import backend.service.QuestionService;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/test/{testId}")
@Api(value = "Questions management",
        basePath = "/api/test/{testId}",
        produces = "application/json",
        description = "Get, create, replace test's questions")
public class QuestionController {
    @Autowired
    private QuestionService questionService;

    @ApiOperation(value = "Get questions",
            response = QuestionListDto.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success."),
            @ApiResponse(code = 401, message = "You are not authorized."),
            @ApiResponse(code = 403, message = "You haven't permissions."),
            @ApiResponse(code = 404, message = "Test not found."),
            @ApiResponse(code = 500, message = "Unknown error.")
    })
    @GetMapping("/questions")
    private ResponseEntity getAll(
            @PathVariable int testId) throws Exception {
        return ResponseEntity.ok(questionService.getAll(testId));
    }

    @ApiOperation(value = "Create question",
            response = QuestionDto.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success."),
            @ApiResponse(code = 401, message = "You are not authorized."),
            @ApiResponse(code = 403, message = "You haven't permissions."),
            @ApiResponse(code = 404, message = "Test not found."),
            @ApiResponse(code = 500, message = "Unknown error.")
    })
    @PostMapping("/question")

    private ResponseEntity createOne(
            @PathVariable int testId,
            @RequestBody QuestionDto questionDto) throws Exception {
        return ResponseEntity.ok(questionService.create(testId, questionDto));
    }

    @ApiOperation(value = "Set questions",
            response = QuestionListDto.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success."),
            @ApiResponse(code = 401, message = "You are not authorized."),
            @ApiResponse(code = 403, message = "You haven't permissions."),
            @ApiResponse(code = 404, message = "Test not found."),
            @ApiResponse(code = 500, message = "Unknown error.")
    })
    @PostMapping("/questions")
    private ResponseEntity setQuestions(
            @PathVariable int testId,
            @RequestBody QuestionListDto questionsDto) throws Exception {
        return ResponseEntity.ok(questionService.create(testId, questionsDto));
    }
}
