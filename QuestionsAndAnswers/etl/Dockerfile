# install node base
FROM node:12.19.0 as base
WORKDIR /etl

COPY package*.json ./
# install dependancies
FROM qa-base AS dependancies

RUN npm install --production

FROM mongo:4.4.4 AS mongo

EXPOSE ${PORT}
EXPOSE ${DBPORT}
COPY . .

RUN [ "mongod", "dumb-init", "node", "index.js" ]
