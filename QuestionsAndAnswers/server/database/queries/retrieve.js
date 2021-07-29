const db = require("../index.js");
const Answer = require("../schemas/Answer.js");
const Question = require("../schemas/Question.js");

exports.getQuestions = (pId, cb) => {
  db.Question.find({ product_id: pId }, (err, result) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, result);
    }
  });
};

exports.getAnswers = (qId, cb) => {
  db.Answer.find({ question_id: qId }, (err, result) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, result);
    }
  });
};
