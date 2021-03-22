const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

mongoose.connect('mongodb://127.0.0.1:27017/qaservice', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  autoIndex: false,
})
  .catch((err) => console.error('Error connecting the ETL to Mongoose'))
  .then((result) => console.log('The ETL process has connected to Mongoose!'))

  // Photos

const photosSchema = mongoose.Schema({
  photo_id: { type: Number, unique: true },
  answer_id: [{
    type: mongoose.Schema.Types.Number,
    ref: 'Answer'
  }],
  url: { type: String, unique: true },
}, { _id: false });

const Photo = mongoose.model('Photo', photosSchema);

// Answers

const answersSchema = mongoose.Schema({
  answer_id: { type: Number, unique: true },
  question_id: [{
    type: mongoose.Schema.Types.Number,
    ref: 'Question'
  }],
  body: { type: String, unique: true },
  date: String,
  answerer_name: String,
  answerer_email: String,
  helpfulness: Number,
  report: Boolean,
  photos: [{
    type: mongoose.Schema.Types.Number,
    ref: 'Photo'
  }],
}, { _id: false });

const Answer = mongoose.model('Answer', answersSchema);

// Questions

const questionsSchema = mongoose.Schema({
  product_id: [{
    type: mongoose.Schema.Types.Number,
    ref: 'Product'
  }],
  question_id: { type: Number, unique: true },
  question_body: { type: String, unique: true },
  question_date: String,
  asker_name: String,
  asker_email: String,
  question_helpfulness: Number,
  report: Boolean,
  answers: [answersSchema],
}, { _id: false });


// {
//   type: mongoose.Schema.Types.Number,
//   ref: 'Answer'
// }

const Question = mongoose.model('Question', questionsSchema);
questionsSchema.plugin(AutoIncrement, { inc_field: 'question_id', disable_hooks: true, collection_name: 'indexes' }, { _id: false });

// Reported Q&As

const reportsSchema = mongoose.Schema({
  id: { type: String, unique: true },
  reports: { type: Number, default: 0 },
}, { _id: false })

const Report = mongoose.model('Report', reportsSchema);

const productsSchema = mongoose.Schema({
  product_id: { type: Number, unique: true },
  results: [{
    type: mongoose.Schema.Types.Number,
    ref: 'Question'
  }],
}, { _id: false })

const Product = mongoose.model('Product', productsSchema);
productsSchema.plugin(AutoIncrement, { inc_field: 'product_id', disable_hooks: true, collection_name: 'indexes' });

module.exports = {
  Answer: Answer,
  Question: Question,
  Photo: Photo,
  Report: Report,
  Product: Product,
}
