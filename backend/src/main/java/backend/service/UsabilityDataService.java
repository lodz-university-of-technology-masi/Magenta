package backend.service;

import backend.dto.usabilitydata.UsabilityDataDto;

import java.io.IOException;

public interface UsabilityDataService {

    void persist(final UsabilityDataDto usabilityDataDto, final String username, String clientIpAddress);

    void saveScreenshot(final String imageValue, final String username) throws IOException;
}
