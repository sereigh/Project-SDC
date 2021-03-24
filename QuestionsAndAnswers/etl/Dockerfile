FROM mongo:4.4.4
WORKDIR /etl
COPY package*.json ./
RUN npm install
VOLUME ["/etl/data"]
COPY . .
EXPOSE 27017
CMD [ "node", "./index.js" ]