FROM node:16-alpine

EXPOSE 5000

WORKDIR /usr/src/app

COPY . .

RUN npm install && \
	npm run build && \
	npm install -g serve && \
	rm -rf /var/lib/apt/lists/*

CMD ["serve", "-s", "-l", "5000", "build"]

# You can run this image with 
# docker run -p 5000:5000 <image name>
