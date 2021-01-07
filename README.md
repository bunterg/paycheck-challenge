# Paycheck module test

## Requirements

For development:

- NodeJS v10 or greater
- NPM

For deploy:

- Docker:
  - Docker
  - Docker compose
- PM2
  - Nginx
  - [PM2](https://pm2.keymetrics.io/) process manager

## Development

Run project with live reload

```Shell
npm run development
```

Run tests

```Shell
npm run test
npm run integration-test
npm run unit-test
```

### Production

#### Docker

Deploy solution with reverse proxy on docker instance with docker compose

```Shell
docker-compose up
```

#### PM2

Every instance are going to work on port 3000 by default, it's recommended to use a reverse proxy server like Nginx, using Nginx it's recommended to remove *compression* from code.

Nginx config example

```Text
server {
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Start

```Shell
pm2 start ecosystem.config.yaml --env production
```

Restart

```Shell
pm2 start ecosystem.config.yaml --env production
```

Stop

```Shell
pm2 stop paycheck-module
```

Delete (first stop instances)

```Shell
pm2 delete paycheck-module
```
