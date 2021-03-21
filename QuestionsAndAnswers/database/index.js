const mongoose = require('mongoose')

const { productsSchema } = require('./schemas/Product.js')
const { questionsSchema } = require('./schemas/Question.js')
const { answersSchema } = require('./schemas/Answer.js')
const { photosSchema } = require('./schemas/Photo.js')
const { reportsSchema } = require('./schemas/Report.js')

mongoose.connect('mongodb://localhost/qaservice', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  autoIndex: false,
})
  .catch((err) => console.error('Error connecting to Mongoose'))
  .then((result) => console.log('Mongoose is connected!'))

exports.Product = mongoose.model('Product', productsSchema)

exports.Question = mongoose.model('Question', questionsSchema)

exports.Answer = mongoose.model('Answer', answersSchema)

exports.Report = mongoose.model('Report', reportsSchema)

exports.Photo = mongoose.model('Photo', photosSchema)
