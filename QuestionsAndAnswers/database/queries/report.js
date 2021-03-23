const db = require('../index.js')
const Answer = require('../schemas/Answer.js')
const Question = require('../schemas/Question.js')

exports.markQuestionReported = (pId, cb) => {
  db.Question.findOneAndUpdate(
    { "question_id": pId }, { "report": true },
    (err, result) => {
      if (err) { cb(err, null) }
      else {
        cb(null, result)
        db.Report.findOneAndUpdate({ "id": `0${pId}` }, { $inc: { "reports": 1 } }, { upsert: true },
          (err) => (err && console.error('Reporting error ', err)))
      }
    })
}

exports.markAnswerReported = (qId, cb) => {
  db.Answer.findOneAndUpdate(
    { "answer_id": qId }, { "report": true },
    (err, result) => {
      if (err) { cb(err, null) }
      else {
        cb(null, result)
        db.Report.findOneAndUpdate({ "id": `00${qId}` }, { $inc: { "reports": 1 } }, { upsert: true },
          (err) => (err && console.error('Reporting error ', err)))
      }
    })
}
