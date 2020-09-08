## http2 测试


### 启动docker
```
docker container run \
  --rm \
  --name mynginx \
  --volume "$PWD/html":/usr/share/nginx/html \
  --volume "$PWD/conf":/etc/nginx \
  -p 127.0.0.1:8080:80 \
  -p 127.0.0.1:8081:443 \
  nginx
```

