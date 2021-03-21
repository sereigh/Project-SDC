const { getQuestions, getAnswers } = require('../../database/queries/retrieve.js')

exports.questions = (req, res) => {
  const pId = req.query.product_id
  getQuestions(pId, (err, result) => {
    if (err) { res.status(404).send(err) }
    else { res.status(201).send(result) }
  })
}

exports.answers = (req, res) => {
  const qId = req.query.question_id
  getAnswers(qId, (err, result) => {
    if (err) { res.status(404).send(err) }
    else { res.status(201).send(result) }
  })
}
