const mongoose = require('mongoose')
const { photosSchema } = require('./Photo.js')

exports.answersSchema = mongoose.Schema({
  answer_id: { type: Number, index: { unique: true } },
  question_id: {
    type: mongoose.Schema.Types.Number,
    ref: 'Question'
  },
  body: {type: String, unique: true},
  date_written: { type: Date, default: Date.now },
  answerer_name: String,
  answerer_email: String,
  helpfulness: {type: Number, default: 0},
  report: {type: Boolean, default: false},
  photos: [{
    type: mongoose.Schema.Types.Number,
    ref: 'Photo'
  }],
})
