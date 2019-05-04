package backend.repository;

import backend.entity.UserTestSolution;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SolutionRepository extends JpaRepository<UserTestSolution, Integer> {

    @Query("SELECT s FROM UserTestSolution s JOIN s.user u WHERE u.username = :username")
    List<UserTestSolution> getAllForUser(@Param("username") String username);
}
