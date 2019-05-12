package backend.utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

public class WikipediaUtils {

    public static String getWikipediaDefinition(String wantedText) {

        try {
            URL url = new URL("https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + wantedText + "&limit=1 ");
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

            return returnString;

        } catch (MalformedURLException e) {

            e.printStackTrace();

        } catch (IOException e) {

            e.printStackTrace();

        }
        return Constans.WIKIPEDIA_RESPONSE.WIKIPEDIA_RESPONSE_ERROR;
    }
}
