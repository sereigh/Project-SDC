const mongoose = require('mongoose')
const { Answer, Question, Photo, Report } = require('./index.js')

const saveQuestions = (entries, cb) => {
  Question.insertMany(entries, { ordered: false, rawResult: true }, (err, result) => {
    if (err) { return cb(err, null) }
    else { return cb(null, result) }
  })
};

const saveAnswers = (entries, cb) => {
    Answer.insertMany(entries, { ordered: false, rawResult: true }, (err, result) => {
      if (err) { return cb(err, null) }
      else { return cb(null, result) }
    })
}

const savePhotos = (entries, cb) => {
    Photo.insertMany(entries, { ordered: false, rawResult: true }, (err, result) => {
      if (err) { return cb(err, null) }
      else { return cb(null, result) }
    })
}

//   Question.aggregate([
//     {$match: {reported: {$eq: false}}},
//     {$group: {$mergeObjects: {$eq: "$product_id"}}},
//     {$out: {db: "qafetcher", coll: "products"}}
//   ], (err) => {
//     if (err) { return cb(err, null) }
//     else { return cb(null, result) }
//   })

module.exports = {
  saveQuestions: saveQuestions,
  saveAnswers: saveAnswers,
  savePhotos: savePhotos,
};
