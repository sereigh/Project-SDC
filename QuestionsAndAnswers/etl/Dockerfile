FROM mongo:4.4.4
WORKDIR /etl

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE ${DBPORT}

CMD [ "dumb-init", "node", "index.js" ]