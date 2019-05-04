package backend.repository;

import backend.entity.UserTestSolution;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SolutionRepository extends JpaRepository<UserTestSolution, Integer> {
}
