const db = require('../index.js')
const Answer = require('../schemas/Answer.js')
const Question = require('../schemas/Question.js')

exports.saveQuestion = (pId, cb) => {
  // let obj = { "question_body": data.body, "asker_name": data.name, "asker_email": data.email, "product_id": data.product_id }

  // db.Question(obj).save((err, result) => {
  //   if (err) { cb(err, null) }
  //   else { cb(null, result) }
  // })
  cb('save questions got')
}

exports.saveAnswer = (qId, cb) => {
  // let obj = { "body": data.body, "answerer_name": data.name, "answerer_email": data.email, "question_id": data.question_id }

  // db.Answer(obj).save((err, result) => {
  //   if (err) { cb(err, null) }
  //   else { cb(null, result) }
  // })
  cb('save answers got')
}
