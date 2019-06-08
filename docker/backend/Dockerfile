FROM java
COPY app/target/backend-1.0-SNAPSHOT.jar app/server.jar
WORKDIR /app/

ENTRYPOINT ["java", "-jar", "server.jar"]