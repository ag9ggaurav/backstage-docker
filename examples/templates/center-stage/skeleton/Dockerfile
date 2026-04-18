FROM golang:1.22-alpine AS builder
WORKDIR /src

COPY go.mod ./
RUN go mod download

COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o /out/center-stage .

FROM alpine:3.19
RUN apk add --no-cache ca-certificates openssh-client && adduser -D -u 10001 app

WORKDIR /app
COPY --from=builder /out/center-stage /usr/local/bin/center-stage
COPY scripts /scripts

RUN chmod +x /scripts/cato-admin.sh && chown -R app:app /app /scripts /usr/local/bin/center-stage

USER app
ENV PORT=8080
EXPOSE 8080

ENTRYPOINT ["/usr/local/bin/center-stage"]
