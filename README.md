# Mjml rest server

Simplist Mjml rest server,:
- POST /: serving a mjml compiled version of the request body
- GET /metrics: prometheus compatible metrics
 
## Build
```
docker rm docker-mjml-server; \
docker kill docker-mjml-server; \
docker build -t docker-mjml-server . && \
docker run -it --rm \
    -v $(PWD):/app \
    -p 3002:3001 \
    --env PORT=3001 \
    --name docker-mjml-server \
    docker-mjml-server
```

## Example
```
curl -X POST "http://192.168.99.100:3002" --header "Content-Type: application/json" -d '{"mjml":"<mjml><mj-body><mj-text>test</mj-text></mj-body></mjml>"}'
```

## Usage
- environment variables:
  + PORT, bind port, by default 3000
  + ADRESS, bind address, by default 0.0.0.0 


## Inspiration
https://github.com/shyim/mjml-server
