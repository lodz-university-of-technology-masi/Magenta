package backend.utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

public class WikipediaUtils {

    public static String getWikipediaDefinition(String wantedText, String language) {

        try {
            URL url = new URL("https://" + language + ".wikipedia.org/w/api.php?action=opensearch&format=json&search=" + wantedText.replace(" ", "") + "&limit=1 ");
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Accept", "application/json");

            if (conn.getResponseCode() != 200) {
                throw new RuntimeException("Failed : HTTP error code : "
                        + conn.getResponseCode());
            }

            BufferedReader br = new BufferedReader(new InputStreamReader(
                    (conn.getInputStream())));

            String output;
            StringBuilder wholeResponse = new StringBuilder();
            while ((output = br.readLine()) != null) {
                wholeResponse.append(output);
            }

            String[] results = wholeResponse.toString().split("\\[");

            if (results[3].isEmpty()) {
                return Constans.WIKIPEDIA_RESPONSE.WIKIPEDIA_EMPTY_RESPONSE;
            }
            String returnString = results[3].substring(1, results[3].length() - 3);

            conn.disconnect();

            returnString = replacePolishUnicodeSigns(returnString);

            return returnString;

        } catch (MalformedURLException e) {

            e.printStackTrace();

        } catch (IOException e) {

            e.printStackTrace();

        }
        return Constans.WIKIPEDIA_RESPONSE.WIKIPEDIA_RESPONSE_ERROR;
    }

    private static String replacePolishUnicodeSigns(String currentString) {
        currentString = currentString.replace(Constans.UNICODE_SIGNS.Ą, "Ą");
        currentString = currentString.replace(Constans.UNICODE_SIGNS.ą, "ą");
        currentString = currentString.replace(Constans.UNICODE_SIGNS.Ć, "Ć");
        currentString = currentString.replace(Constans.UNICODE_SIGNS.ć, "ć");
        currentString = currentString.replace(Constans.UNICODE_SIGNS.Ę, "Ę");
        currentString = currentString.replace(Constans.UNICODE_SIGNS.ę, "ę");
        currentString = currentString.replace(Constans.UNICODE_SIGNS.Ł, "Ł");
        currentString = currentString.replace(Constans.UNICODE_SIGNS.ł, "ł");
        currentString = currentString.replace(Constans.UNICODE_SIGNS.Ń, "Ń");
        currentString = currentString.replace(Constans.UNICODE_SIGNS.ń, "ń");
        currentString = currentString.replace(Constans.UNICODE_SIGNS.Ó, "Ó");
        currentString = currentString.replace(Constans.UNICODE_SIGNS.ó, "ó");
        currentString = currentString.replace(Constans.UNICODE_SIGNS.Ś, "Ś");
        currentString = currentString.replace(Constans.UNICODE_SIGNS.ś, "ś");
        currentString = currentString.replace(Constans.UNICODE_SIGNS.Ź, "Ź");
        currentString = currentString.replace(Constans.UNICODE_SIGNS.ź, "ź");
        currentString = currentString.replace(Constans.UNICODE_SIGNS.Ż, "Ż");
        currentString = currentString.replace(Constans.UNICODE_SIGNS.ż, "ż");
        currentString = currentString.replace(Constans.UNICODE_SIGNS.DASH, "-");
        return currentString;
    }
}
