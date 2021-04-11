const { extractData } = require('./extract.js')

const seedQuestions = () => {
  const qHeaders = ["question_id", "product_id", "question_body", "question_date", "asker_name", "asker_email", "question_helpfulness", "reported"]
  extractData('../../../questions.csv', qHeaders, 'q', (err, result) => {
    if (err) { return console.error(err) }
  })
}

// seedQuestions()

const seedAnswers = () => {
  const aHeaders = ["id", "question_id", "body", "date_written", "answerer_name", "answerer_email", "report", "helpfulness"]
  extractData('../../../answers.csv', aHeaders, 'a', (err, result) => {
    if (err) { return console.error(err) }
  })
}

// seedAnswers()

const seedPhotos = () => {
  const pHeaders = ['id', 'answer_id', 'url']
  extractData('../../../answers_photos.csv', pHeaders, 'p', (err, result) => {
    if (err) { return console.error(err) }
  })
}

// seedPhotos()

const seedProducts = () => {
  const qHeaders = ["question_id", "product_id", "question_body", "question_date", "asker_name", "asker_email", "question_helpfulness", "reported"]
  extractData('../../../questions.csv', qHeaders, 'pr', (err, result) => {
    if (err) { return console.error(err) }
  })
}

seedProducts()
