FROM golang:1.16.15 AS dev-env

WORKDIR /usr/src/app

COPY . .

RUN go build && go test ./...

FROM ubuntu:18.04

ENV PORT=8080
WORKDIR /usr/src/app

COPY --from=dev-env /usr/src/app/server /usr/src/app

RUN useradd -m appuser && chown appuser .
USER appuser

CMD ["./server"]
