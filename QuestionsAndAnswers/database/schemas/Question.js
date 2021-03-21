const mongoose = require('mongoose')
const { answersSchema } = require('./Answer.js')

exports.questionsSchema = mongoose.Schema({
  product_id: Number,
  question_id: {type: Number, unique: true},
  question_body: {type: String, unique: true},
  question_date: { type: Date, default: Date.now },
  asker_name: String,
  asker_email: String,
  question_helpfulness: {type: Number, default: 0},
  report: {type: Boolean, default: false},
  answers: {answersSchema},
}, { _id : false })
