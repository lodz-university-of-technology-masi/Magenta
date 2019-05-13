package backend.utils;

public abstract class Constans {
    public abstract class USER_ROLES {
        public static final String USER = "USER";
        public static final String REDACTOR = "REDACTOR";
        public static final String MODERATOR = "MODERATOR";
        public static final String ADMIN = "ADMIN";
    }

    public abstract class WIKIPEDIA_RESPONSE {
        public static final String WIKIPEDIA_RESPONSE_ERROR = "WIKIPEDIA ERROR";
        public static final String WIKIPEDIA_EMPTY_RESPONSE = "NIE ZNALEZIONO DEFNICJI";
    }

    public abstract class UNICODE_SIGNS {
        public static final String Ą = "\\u0104";
        public static final String ą = "\\u0105";
        public static final String Ć = "\\u0106";
        public static final String ć = "\\u0107";
        public static final String Ę = "\\u0118";
        public static final String ę = "\\u0119";
        public static final String Ł = "\\u0141";
        public static final String ł = "\\u0142";
        public static final String Ń = "\\u0143";
        public static final String ń = "\\u0144";
        public static final String Ó = "\\u00d3";
        public static final String ó = "\\u00f3";
        public static final String Ś = "\\u015a";
        public static final String ś = "\\u015b";
        public static final String Ź = "\\u0179";
        public static final String ź = "\\u017a";
        public static final String Ż = "\\u017b";
        public static final String ż = "\\u017c";
        public static final String DASH = "\\u2013";
    }

    public static final String TRANSLATION_API_KEY = "trnsl.1.1.20190512T231203Z.3a243b24aa8a9316.69378ef4ee2bf8c6536509fb191a7822bebbe9d3";
    public static final String TRANSLATE_TO_ENGLISH = "pl-en";
    public static final String TRANSLATE_TO_POLISH = "en-pl";
}

