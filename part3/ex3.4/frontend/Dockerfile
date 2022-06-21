FROM ubuntu:18.04

EXPOSE 5000

WORKDIR /usr/src/app

COPY . .

RUN apt update -y && \
	apt install -y curl && \
	curl -sl https://deb.nodesource.com/setup_16.x | bash && \
	apt install -y nodejs && \
	npm install && \
	npm run build && \
	npm install -g serve && \
	apt purge -y --auto-remove curl && \
	rm -rf /var/lib/apt/lists/* && \
	useradd -m appuser && \
	chown appuser .

USER appuser

CMD ["serve", "-s", "-l", "5000", "build"]

# You can run this image with 
# docker run -p 5000:5000 <image name>
