FROM golang:1.16.15 AS dev-env

WORKDIR /usr/src/app

COPY . .

RUN go build && go test ./... && useradd -m appuser && chown appuser .

USER appuser

CMD ["./server"]
