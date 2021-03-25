const db = require('../index.js')
const Answer = require('../daschemas/Answer.js')
const Question = require('../schemas/Question.js')

exports.markQuestionHelpful = (pId, cb) => {
  db.Question.findOneAndUpdate(
    { "question_id": pId },
    { $inc: { "question_helpfulness": 1 } }, (err, result) => {
      if (err) { cb(err, null) }
      else { cb(null, result) }
    })
}

exports.markAnswerHelpful = (qId, cb) => {
  db.Answer.findOneAndUpdate(
    { "answer_id": qId },
    { $inc: { "helpfulness": 1 } }, (err, result) => {
      if (err) { cb(err, null) }
      else { cb(null, result) }
    })
}
