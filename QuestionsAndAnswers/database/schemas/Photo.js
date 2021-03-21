const mongoose = require('mongoose')

const photosSchema = mongoose.Schema({
  photo_id: {type: Number, unique: true},
  answer_id: Number,
  url: {type: String, unique: true},
}, { _id : false });

const Photo = mongoose.model('Photo', photosSchema);

module.exports = {
  Photo: Photo,
  photosSchema: photosSchema
}
