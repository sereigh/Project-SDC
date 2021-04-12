# trendee

>Retail web portal, scaled for an increase of traffic. 

#### Table of Contents

* [trendee](#trendee)
     * [Technologies](#Technologies)
     * [Development](#Development)
     * [Installation](#Installation)
     * [Operation](#Operation)
     * [Docker](#Docker)
     * [Preview](#Preview)
          * [Screenshots](#Screenshots)
     * [Testing](#Testing)
     * [Authors](#Authors)
     * [License](#License)

### Technologies

|    Stack   | Dependancies | Dev Dependancies |
|------------|--------------|------------------|
|  Node.js   |   Mongoose   |  Artillery       |
|  MongoDB   |  dotenv-safe |  New Relic       |
| Docker     |  Express.js  |  eslint -airbnb  |
| JavaScript |
| Express.js |


### Development

> My role in the remote team that developed trendee's backend was re-designing and optimizing it's Questions & Answers Service. 

I chose to implement a noSQL database to store trendee's 3mil Questions, 12mil Answers, & 3.5mil photos, as the needs of the application are primarily read heavy and non-transactional. I used a normalized data model with manual references, supported by ___Mongoose___'s populate method, to to reduce decision points in the database and improve latency over the legacy system. 
 
>Check out [Operation](#Operation) for an overview of trendee's Q & A backend functionality or the [Preview](#Preview) below for a demonstration of it's stress test. 

### Installation

1. Clone repository.
2. From within the ___QuestionsAndAnswers___ directory:

``
npm install
``

3. From within the ___QuestionsAndAnswers___ directory:

``
npm start
``

### Operation

- Send an inappropriate question or answer to a collection for review. 

  ``/qa/questions/:question_id/report``
  
  ``/qa/answers/:answer_id/report``

- Vote a question or answer helpful.

  ``/qa/questions/:question_id/helpful``
  
  ``/qa/answers/:answer_id/helpful``
  
- Retrieve all questions related to a product and their corresponding answers.

  ``/qa/questions``

- Retrieve all answers related to a question.

  ``/qa/questions/:question_id/answers`` 
  
### Docker

* [Service Image](https://hub.docker.com/repository/docker/sereigh/qa-service "Service Image")
* [API Image](https://hub.docker.com/repository/docker/sereigh/qa-api "API Image")
* [DBMS Image](https://hub.docker.com/repository/docker/sereigh/qa-dbms "DBMS Image")
* [ETL Process Image](https://hub.docker.com/repository/docker/sereigh/qa-etl "ETL Process Image")

### Preview

![Preview]()


### Screenshots

![GET Response Times]( "GET Response Times")
![UPDATE Response Times]( "UPDATE Response Times")
![POST Response Times]( "POST Response Times")

### Testing

Tested using ___Artillery.io___ in development. 
Tested using ___New Relic___ in production.

### Authors

[Krista Brock](https://github.com/sereigh "Krista Brock")[Questions And Answers Service]

[Edwin Ekpenyong](https://github.com/moogiemode "Edwin Ekpenyong")[Related Products Service]

[Zachary Shold](https://github.com/Prollux "Zachary Shold")[Ratings And Reviews Service]


### License 

[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]
