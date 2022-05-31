FROM openjdk:8u332-buster

EXPOSE 8080

WORKDIR /usr/src/app

COPY . .

RUN apt-get update && apt-get install -y dos2unix && chmod +x mvnw && dos2unix mvnw

RUN ./mvnw package

CMD ["java", "-jar", "./target/docker-example-1.1.3.jar"]
