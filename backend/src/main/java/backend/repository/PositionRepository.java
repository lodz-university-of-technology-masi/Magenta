package backend.repository;

import backend.entity.Position;
import backend.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PositionRepository extends JpaRepository<Position, Integer> {
}
