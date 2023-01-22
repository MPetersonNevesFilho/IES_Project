FROM openjdk:17-jdk-alpine
VOLUME /backend
ADD target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]