package backend.repository;

import backend.entity.Role;
import backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUsernameIgnoreCase(String username);

    Optional<User> findByEmail(String email);

    List<User> getUserByRoles(Role role);

    @Query("SELECT COUNT(u) FROM User u")
    int getTotalCount();
}
