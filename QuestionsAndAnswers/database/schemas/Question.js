const mongoose = require('mongoose')
const { answersSchema } = require('./Answer.js')

let questionsSchema = mongoose.Schema({
  product_id: Number,
  question_id: {type: Number, unique: true},
  question_body: {type: String, unique: true},
  question_date: { type: Date, default: Date.now },
  asker_name: String,
  asker_email: String,
  question_helpfulness: {type: Number, default: 0},
  report: {type: Boolean, default: false},
  answers: { $question_id: { answersSchema } },
}, { _id : false });

let Question = mongoose.model('Question', questionsSchema);

module.exports = {
  Question: Question,
  questionsSchema: questionsSchema
}
