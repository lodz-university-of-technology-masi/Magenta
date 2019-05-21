package backend.service;

import backend.dto.usabilitydata.UsabilityDataDto;

public interface UsabilityDataService {

    void persist(UsabilityDataDto usabilityDataDto, String username);
}
