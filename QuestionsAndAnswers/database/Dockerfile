FROM mongo:4.4.4
WORKDIR /RFP51/Project-SDC/QuestionsAndAnswers/database
COPY package*.json ./
USER node
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "index.js" ]