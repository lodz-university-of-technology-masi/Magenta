package backend.dto.synonyms;

import java.util.List;

public class SynonymResponseDto {
    private List<SynonymDto> synonyms;

    public List<SynonymDto> getSynonyms() {
        return synonyms;
    }

    public void setSynonyms(List<SynonymDto> synonyms) {
        this.synonyms = synonyms;
    }
}
