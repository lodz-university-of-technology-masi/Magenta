package backend.service.impl;

import backend.converter.TestConverter;
import backend.dto.test.TestListDto;
import backend.entity.Test;
import backend.exception.forbidden.ForbiddenException;
import backend.repository.TestRepository;
import backend.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional(isolation = Isolation.SERIALIZABLE, rollbackFor = Exception.class)
public class TestServiceImpl implements TestService {

    @Autowired
    private TestRepository testRepository;

    @Override
    public TestListDto getAllTests() {
        return TestListDto.builder()
                .tests(TestConverter.getRolesDtoList(testRepository.findAll()))
                .build();

    }

    @Override
    public void deleteTest(int id, String authorizationToken) {
        Optional<Test> testOptional = testRepository.findById(id);
        if (testOptional.isPresent()) {
            try {
                testRepository.delete(testOptional.get());
            } catch (EmptyResultDataAccessException e) {
            }
        }
    }
}
