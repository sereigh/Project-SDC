const mongoose = require('mongoose')
const { questionsSchema } = require('./Question.js')

exports.productsSchema = mongoose.Schema({
  product_id: {type: Number, unique: true},
  results: [questionsSchema],
})
