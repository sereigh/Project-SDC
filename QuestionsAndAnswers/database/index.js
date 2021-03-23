const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const { questionsSchema } = require('./schemas/Question.js')
const { productsSchema } = require('./schemas/Product.js')
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

photosSchema.plugin(AutoIncrement, { inc_field: 'photo_id', collection_name: 'indexes' }, { _id: false })
answersSchema.plugin(AutoIncrement, { inc_field: 'answer_id', collection_name: 'indexes' }, { _id: false })
questionsSchema.plugin(AutoIncrement, { inc_field: 'question_id', collection_name: 'indexes' }, { _id: false })
productsSchema.plugin(AutoIncrement, { inc_field: 'product_id', collection_name: 'indexes' })

exports.Question = mongoose.model('Question', questionsSchema)
exports.Answer = mongoose.model('Answer', answersSchema)
exports.Report = mongoose.model('Report', reportsSchema)
exports.Photo = mongoose.model('Photo', photosSchema)
exports.Product = mongoose.model('Product', productsSchema)
