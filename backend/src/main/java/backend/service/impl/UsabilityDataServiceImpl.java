package backend.service.impl;

import backend.converter.UsabilityDataConverter;
import backend.dto.usabilitydata.UsabilityDataDto;
import backend.entity.Browser;
import backend.entity.UsabilityData;
import backend.repository.UsabilityDataRepository;
import backend.service.UsabilityDataService;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.io.FileOutputStream;
import java.io.IOException;
import java.sql.Timestamp;
import java.time.LocalDateTime;

import static backend.utils.Constans.DATE_TIME_FORMATTER;

@Service
@Transactional(isolation = Isolation.SERIALIZABLE, rollbackFor = Exception.class)
public class UsabilityDataServiceImpl implements UsabilityDataService {

    private final UsabilityDataRepository usabilityDataRepository;


    @Autowired
    public UsabilityDataServiceImpl(final UsabilityDataRepository usabilityDataRepository) {
        this.usabilityDataRepository = usabilityDataRepository;
    }


    @Override
    public void persist(final UsabilityDataDto usabilityDataDto, final String username, String clientIpAddress) {
        UsabilityData usabilityData = UsabilityDataConverter.getUsabilityData(usabilityDataDto);
        usabilityData.setBrowser(Browser.get(usabilityDataDto.getBrowser()));
        usabilityData.setSaveTime(Timestamp.valueOf(LocalDateTime.now()));
        usabilityData.setUsername(username);
        usabilityData.setIpAddress(clientIpAddress);
        usabilityDataRepository.save(usabilityData);
    }

    @Override
    public void saveScreenshot(final String imageValue, final String username) throws IOException {
        final String filename = (username != null ? username : "") + "_" + LocalDateTime.now().format(DATE_TIME_FORMATTER) + ".jpg";
        FileOutputStream fileOutputStream = new FileOutputStream(filename);
        fileOutputStream.write(Base64.decodeBase64(imageValue.substring(imageValue.indexOf(','))));
        fileOutputStream.close();
    }
}
