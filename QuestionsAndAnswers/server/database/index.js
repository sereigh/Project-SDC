const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const { questionsSchema } = require('./schemas/Question.js')
const { productsSchema } = require('./schemas/Product.js')
const { answersSchema } = require('./schemas/Answer.js')
const { photosSchema } = require('./schemas/Photo.js')
const { reportsSchema } = require('./schemas/Report.js')

mongoose.connect(`mongodb://${process.env.HOST}}:${process.env.PORT}/${process.env.DB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
.catch((err) => console.error('Error connecting to Mongoose'))
.then((result) => console.log('Mongoose is connected!'))

photosSchema.plugin(AutoIncrement, { _id: 'photo_id', inc_field: 'photo_id' })
answersSchema.plugin(AutoIncrement, { _id: 'answer_id', inc_field: 'answer_id' })
questionsSchema.plugin(AutoIncrement, { _id: 'question_id', inc_field: 'question_id' })
productsSchema.plugin(AutoIncrement, { _id: 'product_id', inc_field: 'product_id' })

exports.Question = mongoose.model('Question', questionsSchema)
exports.Answer = mongoose.model('Answer', answersSchema)
exports.Report = mongoose.model('Report', reportsSchema)
exports.Photo = mongoose.model('Photo', photosSchema)
exports.Product = mongoose.model('Product', productsSchema)
