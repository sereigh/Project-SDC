const mongoose = require('mongoose')
const { questionsSchema } = require('./Question.js')

exports.productsSchema = mongoose.Schema({
  product_id: {type: String, unique: true},
  results: [questionsSchema],
}, { _id : false })
