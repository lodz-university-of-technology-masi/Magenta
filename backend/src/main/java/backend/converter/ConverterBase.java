package backend.converter;

import org.dozer.DozerBeanMapper;

import java.util.Arrays;

public abstract class ConverterBase {
    protected static DozerBeanMapper mapper;

    private static void configureMapper(String... mappingFileUrls) {
        mapper.setMappingFiles(Arrays.asList(mappingFileUrls));
    }

    static {
        mapper = new DozerBeanMapper();
        configureMapper("backend/dozer-mapping.xml");
    }
}