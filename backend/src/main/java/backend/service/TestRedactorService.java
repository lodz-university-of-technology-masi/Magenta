package backend.service;

import backend.exception.not_found.TestNotFoundException;
import backend.exception.not_found.UserNotFoundException;

public interface TestRedactorService {
    void assign(int id, String username) throws TestNotFoundException, UserNotFoundException;
}
