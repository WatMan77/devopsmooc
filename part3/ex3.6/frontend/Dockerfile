FROM node:16-alpine3.16 AS build-env

EXPOSE 5000

WORKDIR /usr/src/app

COPY . .

RUN npm install && \
	npm run build && \
	npm install -g serve && \
	rm -rf /var/lib/apt/lists/*

FROM node:16-alpine3.16
WORKDIR /usr/src/app
RUN npm install -g serve

EXPOSE 5000

COPY --from=build-env /usr/src/app/build /usr/src/app

CMD ["serve", "-s", "-l", "5000", "build"]

# You can run this image with 
# docker run -p 5000:5000 <image name>
