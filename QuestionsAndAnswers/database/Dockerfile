FROM mongo:4.4.4
WORKDIR /database

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE ${DBPORT}
EXPOSE ${PORT}

CMD [ "dumb-init", "node", "index.js" ]