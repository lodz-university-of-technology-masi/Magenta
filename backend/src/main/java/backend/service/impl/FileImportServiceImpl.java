package backend.service.impl;

import backend.dto.test.CsvImportDto;
import backend.entity.*;
import backend.exception.not_found.UserNotFoundException;
import backend.repository.TestRepository;
import backend.repository.UserRepository;
import backend.security.TokenAuthentication;
import backend.service.FileImportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashSet;

@Service
public class FileImportServiceImpl implements FileImportService {
    @Autowired
    private TestRepository testRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TokenAuthentication tokenAuthentication;

    @Override
    public CsvImportDto addTest(MultipartFile file, String authorization) throws IOException, UserNotFoundException {
        Test test = Test.builder()
                .name(file.getOriginalFilename())
                .questions(new HashSet<>())
                .owners(new HashSet<>())
                .build();
        String username = tokenAuthentication.getUsername(authorization);
        User user = userRepository.findByUsernameIgnoreCase(username)
                .orElseThrow(UserNotFoundException::new);
        test.getOwners().add(user);

        CsvImportDto importDto = CsvImportDto.builder()
                .status("OK")
                .errors(new ArrayList<>())
                .build();
        InputStream stream = file.getInputStream();
        BufferedReader reader = new BufferedReader(new InputStreamReader(stream));
        String language = "pl";
        int row = 1;
        while (reader.ready()) {
            String line = reader.readLine();
            String[] cells = line.split(";|,");
            if(cells.length <= 3) {
                importDto.addError(row,"Zbyt mało komórek");
            } else {
                language = cells[2];
                checkIfEmpty(language, importDto, row, "Język nie może być pusty");
                switch (cells[1]) {
                    case "O":
                        addOpenQuestion(test, importDto, cells, row);
                        break;
                    case "L":
                        addNumericQuestion(test, importDto, cells, row);
                        break;
                    case "W":
                        addVariantQuestion(test, importDto, cells, row);
                        break;
                    case "S":
                        addScalaQuestion(test, importDto, cells, row);
                        break;
                    default:
                        importDto.addError(row, "Nie poprawny typ pytania");
                        break;
                }
            }
            row++;
        }
        if(importDto.getStatus().equals("OK")) {
            test.setLanguage(language.toLowerCase());
            testRepository.save(test);
        } else {
            testRepository.delete(test);
        }
        return importDto;
    }

    private void addScalaQuestion(Test test, CsvImportDto importDto, String[] cells, int row) {
        if(cells.length < 4) {
            importDto.addError(row, "Brak pytania");
            return;
        } else {
            if(cells.length < 5) {
                importDto.addError(row, "Wymagane podanie liczby odpowiedzi");
                return;
            }
            if(cells.length < 7) {
                importDto.addError(row, "Wymagana wartość minimalna i maksymalna");
                return;
            }
            String question = cells[3];
            checkIfEmpty(question, importDto, row, "Pytanie nie może być puste");
            int answers = parseInt(cells[4], importDto, row, "Liczba odpowiedzi musi być liczbą");
            if (answers != 2) {
                importDto.addError(row, "Pytanie typu skali wymaga 2 odpowiedzi");
            }
            int min = parseInt(cells[5], importDto, row, "Wartość minimalna musi być liczbą");
            int max = parseInt(cells[6], importDto, row, "Wartość maksymalna musi być liczbą");
            if (max <= min) {
                importDto.addError(row, "Wartość maksymalna musi być większa od minimalnej");
            }
            Question questionEntity = Question.builder()
                    .question(question)
                    .type(Question.TYPE_SCALA)
                    .scalaAnswer(ScalaAnswer.builder()
                            .min(min)
                            .max(max)
                            .build())
                    .test(test)
                    .build();
            test.getQuestions().add(questionEntity);
            testRepository.save(test);
        }
    }

    private void addVariantQuestion(Test test, CsvImportDto importDto, String[] cells, int row) {
        if(cells.length < 4) {
            importDto.addError(row, "Brak pytania");
            return;
        } else {
            if (cells.length < 5) {
                importDto.addError(row, "Wymagane podanie liczby odpowiedzi");
                return;
            }
            if (cells.length < 7) {
                importDto.addError(row, "Wymagane podanie co najmniej 2 odpowiedzi");
                return;
            }
            String question = cells[3];
            checkIfEmpty(question, importDto, row, "Pytanie nie może być puste");
            int answers = parseInt(cells[4], importDto, row, "Liczba odpowiedzi musi być liczbą");
            if (answers < 2) {
                importDto.addError(row, "Pytanie typu wariantowego wymaga co najmniej 2 odpowiedzi");
            }
            if (answers + 5 > cells.length) {
                importDto.addError(row, "Brak odpowiedzi");
                return;
            }

            Question questionEntity = Question.builder()
                    .question(question)
                    .type(Question.TYPE_VARIANT)
                    .test(test)
                    .variants(new HashSet<>(answers))
                    .build();
            for (int i = 0; i < answers; i++) {
                String text = cells[5 + i];
                checkIfEmpty(text, importDto, row, "Pytanie nie może być puste");
                VariantAnswer variantAnswer = VariantAnswer.builder()
                        .question(questionEntity)
                        .text(text)
                        .build();
                questionEntity.getVariants().add(variantAnswer);
            }

            test.getQuestions().add(questionEntity);
            testRepository.save(test);
        }
    }

    private void addNumericQuestion(Test test, CsvImportDto importDto, String[] cells, int row) {
        if (cells.length < 4) {
            importDto.addError(row, "Brak pytania");
            return;
        } else {
            if (cells.length < 5) {
                importDto.addError(row, "Wymagane podanie liczby odpowiedzi");
                return;
            }
            if (cells.length < 6) {
                importDto.addError(row, "Wymagany znacznik końca");
                return;
            }
            String question = cells[3];
            checkIfEmpty(question, importDto, row, "Pytanie nie może być puste");
            int answers = parseInt(cells[4], importDto, row, "Liczba odpowiedzi musi być liczbą");
            if (answers != 1) {
                importDto.addError(row, "Pytanie typu numerycznego wymaga 1 odpowiedzi");
            }
            String answer = cells[5];
            if (!answer.equals("|")) {
                importDto.addError(row, "Pytanie typu otwartego wymaga znacznika końca li|");
            }
            Question questionEntity = Question.builder()
                    .question(question)
                    .type(Question.TYPE_NUMERIC)
                    .test(test)
                    .build();
            test.getQuestions().add(questionEntity);
            testRepository.save(test);
        }
    }

    private void addOpenQuestion(Test test, CsvImportDto importDto, String[] cells, int row) {
        if (cells.length < 4) {
            importDto.addError(row, "Brak pytania");
            return;
        } else {
            if (cells.length < 5) {
                importDto.addError(row, "Wymagane podanie liczby odpowiedzi");
                return;
            }
            if (cells.length < 6) {
                importDto.addError(row, "Wymagany znacznik końca");
                return;
            }
            String question = cells[3];
            checkIfEmpty(question, importDto, row, "Pytanie nie może być puste");
            int answers = parseInt(cells[4], importDto, row, "Liczba odpowiedzi musi być liczbą");
            if (answers != 1) {
                importDto.addError(row, "Pytanie typu otwartego wymaga 1 odpowiedzi");
            }
            String answer = cells[5];
            if (!answer.equals("|")) {
                importDto.addError(row, "Pytanie typu otwartego wymaga znacznika końca li|");
            }
            Question questionEntity = Question.builder()
                    .question(question)
                    .type(Question.TYPE_OPEN)
                    .test(test)
                    .build();
            test.getQuestions().add(questionEntity);
            testRepository.save(test);
        }
    }

    private int parseInt(String cell, CsvImportDto importDto, int row, String error) {
        int result = 0;

        try {
            result = Integer.parseInt(cell);
        } catch (NumberFormatException e) {
            importDto.addError(row, error);
        }

        return result;
    }

    private void checkIfEmpty(String string, CsvImportDto importDto, int row, String error) {
        if (string.isEmpty()) {
            importDto.addError(row, error);
        }
    }
}
