const { markAnswerReported, markQuestionReported } = require('../database/queries/report.js')

exports.reportQuestion = (req, res) => {
  const qId = req.params.question_id
  markQuestionReported(qId, (err, result) => {
    if (err) { res.status(404).send(err) }
    else { res.status(204).send(result) }
  })
}

exports.reportAnswer = (req, res) => {
  const aId = req.params.answer_id
  markAnswerReported(aId, (err, result) => {
      if (err) { res.status(404).send(err) }
      else { res.status(204).send(result) }
    })
}
