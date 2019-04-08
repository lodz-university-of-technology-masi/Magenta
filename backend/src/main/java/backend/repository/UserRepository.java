package backend.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import backend.entity.User;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUsernameIgnoreCase(String username);
    Optional<User> findByEmail(String email);

    @Query("SELECT u FROM User u")
    List<User> getUsersFromTo(Pageable pageable);
    @Query("SELECT COUNT(u) FROM User u")
    int getTotalCount();
}
