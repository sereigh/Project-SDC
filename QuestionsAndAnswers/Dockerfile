FROM node:12.19.0
WORKDIR /RFP51/Project-SDC/QuestionsAndAnswers
COPY package.json /RFP51/Project-SDC/QuestionsAndAnswers
COPY package-lock.json /RFP51/Project-SDC/QuestionsAndAnswers
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "./server/index.js" ]
