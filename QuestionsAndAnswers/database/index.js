const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/qaservice', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.catch ((err) => console.error('Error connecting to Mongoose'))
.then((result) => console.log('Mongoose is connected!'))
