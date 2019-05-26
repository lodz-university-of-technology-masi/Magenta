package backend.repository;

import backend.entity.UsabilityData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsabilityDataRepository extends JpaRepository<UsabilityData, Integer> {
}
