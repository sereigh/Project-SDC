const db = require('../index.js')
const Answer = require('../schemas/Answer.js')
const Question = require('../schemas/Question.js')

exports.markQuestionHelpful = (pId, cb) => {
  // db.Question.findOneAndUpdate(
  //   { "question_id": id },
  //   { $inc: { "question_helpfulness": 1 } }, (err, result) => {
  //     if (err) { cb(err, null) }
  //     else { cb(null, result) }
  //   })
  cb('mark helpful questions got')
}

exports.markAnswerHelpful = (qId, cb) => {
  // db.Answer.findOneAndUpdate(
  //   { "answer_id": id },
  //   { $inc: { "helpfulness": 1 } }, (err, result) => {
  //     if (err) { cb(err, null) }
  //     else { cb(null, result) }
  //   })
  cb('mark helpful answers got')
}
