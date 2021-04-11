const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

mongoose.connect(`mongodb://${process.env.HOST}}:${process.env.PORT}/${process.env.DB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
  .catch((err) => console.error('Error connecting the ETL to Mongoose'))
  .then((result) => console.log('The ETL process has connected to Mongoose!'))

// Photos

const photosSchema = mongoose.Schema({
  photo_id: { type: Number, index: { unique: true } },
  answer_id: {
    type: mongoose.Schema.Types.Number,
    ref: 'Answer'
  },
  url: { type: String, unique: true },
}, { _id: false });

const Photo = mongoose.model('Photo', photosSchema);
photosSchema.plugin(AutoIncrement, { inc_field: 'photo_id', disable_hooks: true, });

// Answers

const answersSchema = mongoose.Schema({
  answer_id: { type: Number, index: { unique: true } },
  question_id: {
    type: mongoose.Schema.Types.Number,
    ref: 'Question'
  },
  body: String,
  date_written: String,
  answerer_name: String,
  answerer_email: String,
  helpfulness: Number,
  report: { type: Boolean, default: false },
  photos: [{
    type: mongoose.Schema.Types.Number,
    ref: 'Photo'
  }],
}, { _id: false })

const Answer = mongoose.model('Answer', answersSchema);
answersSchema.plugin(AutoIncrement, { inc_field: 'answer_id', disable_hooks: true })

// Questions

const questionsSchema = mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.Number,
    ref: 'Product'
  },
  question_id: { type: Number, index: { unique: true } },
  question_body: String,
  question_date: Date,
  asker_name: String,
  asker_email: String,
  question_helpfulness: Number,
  report: { type: Boolean, default: false },
  answers: [{
    type: mongoose.Schema.Types.Number,
    ref: 'Answer'
  }],
}, { _id: false })

const Question = mongoose.model('Question', questionsSchema);
questionsSchema.plugin(AutoIncrement, { inc_field: 'question_id', disable_hooks: true })

// Reported Q&As

// const reportsSchema = mongoose.Schema({
//   question_id: { type: String, unique: true, default: 0 },
//   answer_id: { type: Number, unique: true, default: 0 },
//   reports: { type: Number, default: 0 },
// })

// const Report = mongoose.model('Report', reportsSchema);

const productsSchema = mongoose.Schema({
  product_id: { type: Number, index: { unique: true } },
  results: [{
    type: mongoose.Schema.Types.Number,
    ref: 'Question'
  }],
}, { _id: false })

const Product = mongoose.model('Product', productsSchema);
productsSchema.plugin(AutoIncrement, { inc_field: 'product_id', disable_hooks: true });

module.exports = {
  Answer: Answer,
  Question: Question,
  Photo: Photo,
  // Report: Report,
  Product: Product,
}
