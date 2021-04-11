# Project-Catwalk

> Backend service for a retail web portal, operationalized and scaled.

#### Table of Contents

- [trendee](#trendee)
  - [Technologies](#Technologies)
  - [Development](#Development)
  - [Installation](#Installation)
  - [Operation](#Operation)
  - [Docker](#Docker)
  - [Preview](#Preview)
    - [Screenshots](#Screenshots)
  - [Testing](#Testing)
  - [License](#License)

### Technologies

| Stack      | Dependancies | Dev Dependancies |
| ---------- | ------------ | ---------------- |
| Node.js    | Mongoose     | Artillery        |
| MongoDB    | dotenv-safe  | New Relic        |
| Docker     | Express.js   | eslint -airbnb   |
| JavaScript |
| Express.js |

### Development

> My role in the remote team that developed trendee's backend was re-designing and optimizing the systems of the Questions & Answers Service.

> See the [Docker](#Docker) section for more information on how to use the images contained in this repository.

> Check out [Operation](#Operation) for an overview of the services' backend functionality or the [Preview](#Preview) below for a demonstration of it's stress test.

### Installation

1. Clone repository.
2. From within the **_QuestionsAndAnswers_** directory:
   `npm install`
3. From within the **_QuestionsAndAnswers_** directory:
   `npm start`

### Operation

- Send an inappropriate question or answer to a collection for review.

  `/qa/questions/:question_id/report`

  `/qa/answers/:answer_id/report`

- Vote a question or answer helpful.

  `/qa/questions/:question_id/helpful`

  `/qa/answers/:answer_id/helpful`

- Retrieve all questions related to a product and their corresponding answers.

  `/qa/questions`

- Retrieve all answers related to a question.

  `/qa/questions/:question_id/answers`

### Docker

![Dockerhub/sereigh]()

### Preview

![Preview]()

### Screenshots

![GET Response Times]( "GET Response Times")
![UPDATE Response Times]( "UPDATE Response Times")
![POST Response Times]( "POST Response Times")

### Testing

Tested using **_Artillery.io_** in development.
Tested using **_New Relic_** in production.

### License

[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]
