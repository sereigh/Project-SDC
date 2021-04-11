# build node base img
FROM node:12.19.0 AS base
WORKDIR /server

COPY package*.json ./

# add dependancies
FROM base AS dependancies

RUN npm ci --production

# add files and instructions
FROM dependancies AS qa-api

COPY . .

EXPOSE ${PORT}

USER node

CMD [ "node", "index.js" ]