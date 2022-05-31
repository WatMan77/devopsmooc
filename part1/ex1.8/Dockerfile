FROM ubuntu:20.04

#WORKDIR /usr/src/app

RUN apt update -y && apt install -y curl

COPY command.sh .

CMD ./command.sh
