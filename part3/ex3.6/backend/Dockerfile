FROM golang:1.16.15-alpine AS dev-env

WORKDIR /usr/src/app

COPY . .

RUN go mod download && go build

FROM alpine:latest

WORKDIR /usr/src/app

EXPOSE 8080

ENV PORT=8080

COPY --from=dev-env /usr/src/app/server /usr/src/app

ENV CGO_ENABLED=0

# Could not get the USER part to work on Alpine
# Adding a user is different on Alpine
CMD ["./server"]
