FROM mongo:4.4.4

WORKDIR /database

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]