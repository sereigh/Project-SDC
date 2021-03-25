FROM node:12.19.0
WORKDIR /server

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE ${PORT}

USER node

CMD [ "dumb-init", "node", "index.js" ]