const mongoose = require('mongoose')
const { questionsSchema } = require('./Question.js')

const productSchema = mongoose.Schema({
  product_id: {type: String, unique: true},
  results: [questionsSchema],
}, { _id : false })

const Product = mongoose.model('Product', productSchema);

module.export = Product
