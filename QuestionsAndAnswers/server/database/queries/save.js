const db = require("../index.js");
const Answer = require("../schemas/Answer.js");
const Question = require("../schemas/Question.js");

exports.saveQuestion = (data, cb) => {
  console.log(data);
  let obj = {
    question_body: data.body,
    asker_name: data.name,
    asker_email: data.email,
    product_id: data.product_id,
  };
  console.log(obj);
  db.Question(obj).save((err, result) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, result);
    }
  });
};

exports.saveAnswer = (data, cb) => {
  console.log(data);
  let obj = {
    body: data.body,
    answerer_name: data.name,
    answerer_email: data.email,
    question_id: data.question_id,
  };
  console.log(obj);
  db.Answer(obj).save((err, result) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, result);
    }
  });
};
