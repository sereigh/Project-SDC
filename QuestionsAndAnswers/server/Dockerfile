FROM node:12.19.0 AS base
WORKDIR /server

COPY package*.json ./

FROM base AS dependancies

RUN npm ci --production

FROM dependancies AS qa-api

COPY . .

EXPOSE ${PORT}

USER node

CMD [ "node", "index.js" ]