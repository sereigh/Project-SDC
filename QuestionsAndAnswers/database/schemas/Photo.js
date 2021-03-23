const mongoose = require('mongoose')

exports.photosSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  answer_id: Number,
  url: {type: String, unique: true},
})
