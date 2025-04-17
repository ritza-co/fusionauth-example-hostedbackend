# FusionAuth BFF Example

## Prerequisites

Install Docker.

## How To Run

In a terminal, run the command below to start FusionAuth.

```sh
docker-compose up
```

Then in another terminal, **either** start the app with a node server with the command below:

```sh
cd nodeApp
docker run --init -it --rm --platform=linux/amd64 --name "app" -v ".:/app" -w "/app" -p 3000:3000 --network faNetwork node:23-alpine3.19 sh -c  "npm install && node app.js"
```

**Or** start the serverless app that uses the hosted backend with the command below:

```sh
cd serverlessApp
docker run --init  -it --rm --name "app" -v ".:/app" -w "/app" -p 3000:3000 --network faNetwork node:23-alpine3.19 sh -c  "npm install http-server && npx http-server -d false -a 0.0.0.0 -p 3000 --proxy http://localhost:3000?"
```

Browse to either app at http://localhost:3000.
