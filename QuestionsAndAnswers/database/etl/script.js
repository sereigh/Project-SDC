const { extractData }= require('./extract.js')

// QUESTIONS

const qHeaders = ["product_id", "question_id", "question_body", "question_date", "asker_name", "asker_email", "question_helpfulness", "reported"]

console.time('../../questions.csv', 'extractData')
console.timeEnd('extractData')

extractData('../../questions.csv', qHeaders, 'q', (err, result) => {
  if (err) { return console.error(err) }
})

// ANSWERS

const aHeaders = ["id", "question_id", "body", "date_written", "answerer_name", "answerer_email", "reported", "helpful"]

console.time('extractData')
console.timeEnd('extractData')

// exports.AextractData('../../answers.csv', aHeaders, 'a', (err, result) => {
//   if (err) { return console.error(err) }
// })

// PHOTOS

const pHeaders = ['id', 'answer_id', 'url']

console.time('extractData')
console.timeEnd('extractData')

// exports.PextractData('../../answers_photos.csv', pHeaders, 'p', (err, result) => {
//   if (err) { return console.error(err) }
// })
