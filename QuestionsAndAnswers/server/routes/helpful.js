const { markAnswerHelpful, markQuestionHelpful } = require('../../database/queries/helpful.js')

exports.helpfulQuestion = (req, res) => {
  const qId = req.params.question_id
  markQuestionHelpful(qId, (err, result) => {
    if (err) { res.status(404).send(err) }
    else { res.status(204).send(result) }
  })
}

exports.helpfulAnswer = (req, res) => {
  const aId = req.params.answer_id
    markAnswerHelpful(aId, (err, result) => {
      if (err) { res.status(404).send(err) }
      else { res.status(204).send(result) }
    })
}
