FROM node:latest

WORKDIR /usr/src/app

COPY ./part3/ex3.1/simple-nodejs-server ./

EXPOSE 3000

RUN npm install

CMD ["npm", "run", "prod"]