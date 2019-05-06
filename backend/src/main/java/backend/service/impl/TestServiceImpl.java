package backend.service.impl;

import backend.converter.TestConverter;
import backend.dto.test.TestListDto;
import backend.entity.Role;
import backend.entity.Test;
import backend.entity.User;
import backend.exception.forbidden.ForbiddenException;
import backend.repository.TestRepository;
import backend.repository.UserRepository;
import backend.security.TokenAuthentication;
import backend.service.TestService;
import backend.utils.Constans;
import backend.utils.UserUtils;
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

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TokenAuthentication tokenAuthentication;

    @Override
    public TestListDto getAllTests() {
        return TestListDto.builder()
                .tests(TestConverter.getRolesDtoList(testRepository.findAll()))
                .build();

    }

    @Override
    public void deleteTest(int id, String authorizationToken) throws ForbiddenException {
        String currentUserName = tokenAuthentication.getUsername(authorizationToken);
        Optional<User> currentUser = userRepository.findByUsernameIgnoreCase(currentUserName);
        if (currentUser.isPresent()) {
            if (UserUtils.checkUserRole(currentUser.get(), Constans.USER_ROLES.MODERATOR) ||
                    UserUtils.checkUserRole(currentUser.get(), Constans.USER_ROLES.REDACTOR)) {
                testRepository.deleteById(id);
            } else {
                throw new ForbiddenException();
            }
        }
    }
}

