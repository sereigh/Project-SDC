# trendee

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
  - [Authors](#Authors)
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
>
> See the [Docker](#Docker) section for more information on how to use the images contained in this repository.

> There was a unique need to display multiple pieces of relational data in a clean and user friendly way. I chose to display these data points in an accordion style UI to reduce scrolling and support user control.

The panel functionality is controlled with a queue-like function I implemented with Javascript, and supported by pure CSS properties and ternary operators that switch element class names to show or hide information based on user interaction.

To update and transfer the 3mil+ Questions, 12mil+ Answers, and 3mil+ Photos of legacy data, I created and automated an ETL process, using a combination of **_Javascript_**, **_Regex_**, and **_Node.js_** child processes.

I chose to implement a noSQL database to store the data, as the needs of the application are primarily read heavy and non-transactional. Using a normalized data model with manual references, supported by **_Mongoose_**'s populate method, I was able to reduce decision points in the database and improve latency over the legacy system.

Utilizing **_Docker_**, I created containers for the backend to maintain a reproducible baseline prior to load testing and blueprint future scalability when deployed to **_AWS_** clusters.

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

- ![Service Image](https://hub.docker.com/repository/docker/sereigh/qa-service "Service Image")
- ![API Image](https://hub.docker.com/repository/docker/sereigh/qa-api "API Image")
- ![DBMS Image](https://hub.docker.com/repository/docker/sereigh/qa-dbms "DBMS Image")
- ![ETL Process Image](https://hub.docker.com/repository/docker/sereigh/qa-etl "ETL Process Image")

### Preview

![Preview]()

### Screenshots

![GET Response Times]( "GET Response Times")
![UPDATE Response Times]( "UPDATE Response Times")
![POST Response Times]( "POST Response Times")

### Testing

Tested using **_Artillery.io_** in development.

Tested using **_New Relic_** in production.

### Authors

[Krista Brock](https://github.com/sereigh "Krista Brock") [Questions And Answers Service]

[Edwin Ekpenyong](https://github.com/moogiemode "Edwin Ekpenyong") [Related Products Service]


### License

[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]
