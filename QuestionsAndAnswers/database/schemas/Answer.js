const mongoose = require('mongoose')
const { photosSchema } = require('./Photo.js')

const answersSchema = mongoose.Schema({
  answer_id: {type: Number, unique: true},
  question_id: Number,
  body: {type: String, unique: true},
  date: { type: Date, default: Date.now },
  answerer_name: String,
  answerer_email: String,
  helpfulness: {type: Number, default: 0},
  report: {type: Boolean, default: false},
  photos: [photosSchema],
}, { _id : false });

const Answer = mongoose.model('Answer', answersSchema);

module.exports = {
  Answer: Answer,
  answersSchema: answersSchema
}
