FROM node:12.19.0
WORKDIR /RFP51/Project-SDC/QuestionsAndAnswers/server
COPY package.json /RFP51/Project-SDC/QuestionsAndAnswers/server/package.json
COPY package-lock.json /RFP51/Project-SDC/QuestionsAndAnswers/server/package-lock.json
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "./index.js" ]