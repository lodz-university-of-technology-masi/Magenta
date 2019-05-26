package backend.service.impl;

import backend.converter.UsabilityDataConverter;
import backend.dto.usabilitydata.UsabilityDataDto;
import backend.entity.UsabilityData;
import backend.repository.UsabilityDataRepository;
import backend.service.UsabilityDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(isolation = Isolation.SERIALIZABLE, rollbackFor = Exception.class)
public class UsabilityDataServiceImpl implements UsabilityDataService {

    private final UsabilityDataRepository usabilityDataRepository;


    @Autowired
    public UsabilityDataServiceImpl(final UsabilityDataRepository usabilityDataRepository) {
        this.usabilityDataRepository = usabilityDataRepository;
    }


    @Override
    public void persist(final UsabilityDataDto usabilityDataDto, final String username) {
        UsabilityData usabilityData = UsabilityDataConverter.getUsabilityData(usabilityDataDto);
        usabilityDataRepository.save(usabilityData);
    }
}
