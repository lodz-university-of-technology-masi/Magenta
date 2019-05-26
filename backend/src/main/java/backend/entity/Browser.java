package backend.entity;

import java.util.Arrays;
import java.util.Map;
import java.util.stream.Collectors;

public enum Browser {
    F("firefox"),
    C("chrome"),
    I("internet explorer");

    private String name;


    Browser(final String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    private static final Map<String, Browser> map = Arrays.stream(Browser.values()).collect(Collectors.toMap(browser -> browser.name, browser -> browser));

    public static Browser get(final String name) {
        return map.get(name.toLowerCase());
    }
}
