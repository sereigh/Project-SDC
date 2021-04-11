# build node base img
FROM node:12.19.0 AS base
ENV NODE_ENV=production
ENV HOST=localhost
ENV PORT=80
ENV DBPORT=27017
ENV DB=qa-data
ENV NEW_RELIC_APP_NAME=qa-service
ENV NEW_RELIC_LICENSE_KEY=2c1fafaee6e4c1b39ba613a7feacd4145506NRAL

WORKDIR /server

COPY package*.json ./

# add dependancies
FROM base AS dependancies

RUN npm ci --production

# add files and instructions
FROM dependancies AS qa-api

COPY . .

EXPOSE 3000

USER node

CMD [ "node", "index.js" ]