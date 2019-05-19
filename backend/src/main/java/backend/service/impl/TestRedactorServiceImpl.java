package backend.service.impl;

import backend.entity.Test;
import backend.entity.User;
import backend.exception.not_found.TestNotFoundException;
import backend.exception.not_found.UserNotFoundException;
import backend.repository.TestRepository;
import backend.repository.UserRepository;
import backend.service.TestRedactorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestRedactorServiceImpl implements TestRedactorService {
    @Autowired
    private TestRepository testRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public void assign(int id, String username) throws TestNotFoundException, UserNotFoundException {
        Test test = testRepository.findById(id)
                .orElseThrow(TestNotFoundException::new);
        User user = userRepository.findByUsernameIgnoreCase(username)
                .orElseThrow(UserNotFoundException::new);

        test.getOwners().add(user);
        testRepository.save(test);
    }
}
