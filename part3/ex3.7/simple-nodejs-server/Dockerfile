FROM node:alpine

WORKDIR /usr/src/app

EXPOSE 3000

COPY . .

RUN npm ci && rm -rf /var/lib/apt/lists/*

CMD ["npm", "run", "start"]