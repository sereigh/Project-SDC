const { saveQuestion, saveAnswer } = require("../database/queries/save.js");

exports.question = (req, res) => {
  const data = req.body;
  saveQuestion(data, (err, result) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send(result);
    }
  });
};

exports.answer = (req, res) => {
  const data = req.body;
  saveAnswer(data, (err, result) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send(result);
    }
  });
};
