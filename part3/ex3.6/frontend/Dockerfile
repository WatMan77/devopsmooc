#FROM node:16-alpine AS build-env
#
##EXPOSE 5000
#
#WORKDIR /usr/src/app
#
#COPY . .
#
#RUN npm install && \
	#npm run build && \
	#npm install -g serve && \
	#rm -rf /var/lib/apt/lists/*
#
#FROM alpine
#WORKDIR /usr/src/app
#RUN apk add --update nodejs npm && npm install -g serve
#
##EXPOSE 5000
#
#COPY --from=build-env /usr/src/app/build /usr/src/app
#
#CMD ["npx", "serve", "-s", "-l", "5000", "build"]
#
## You can run this image with 
## docker run -p 5000:5000 <image name>

FROM node:16-alpine as build-env

EXPOSE 5000

WORKDIR /usr/src/app

COPY . .

RUN npm install && \
	npm run build && \
	npm install -g serve

#FROM node:16-alpine
#EXPOSE 5000
#
#WORKDIR /usr/src/app
#
#COPY --from=build-env . .
#
#RUN	npm install -g serve && \
	#rm -rf /var/lib/apt/lists/*

CMD ["serve", "-s", "-l", "5000", "build"]

# You can run this image with 
# docker run -p 5000:5000 <image name>

