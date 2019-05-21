package backend.converter;

import backend.dto.usabilitydata.UsabilityDataDto;
import backend.entity.UsabilityData;

public class UsabilityDataConverter extends ConverterBase {

    public static UsabilityData getUsabilityData(UsabilityDataDto usabilityDataDto) {
        return mapper.map(usabilityDataDto, UsabilityData.class);
    }
}
