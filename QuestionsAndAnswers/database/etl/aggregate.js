const mongoose = require('mongoose')
const { Answer, Question, Photo, Report, Product } = require('./index.js')

exports.groupProducts = (entries, cb) => {
  const options: { allowDiskUse : true }
  const pipeline = [
    { $match : {  } },
    { $group : { … } },
    { $sort : { … }  },
    { $project : {  } },

    // end // limited to 16mb
    { $out : { … }  },
    // or  // not limited
    { $cursor : { … }  },
  ]

  db.collectionName.aggregate(pipeline, options)

//   Question.aggregate([
//     {$match: {reported: {$eq: false}}},
//     {$group: {$mergeObjects: {$eq: "$product_id"}}},
//     {$out: {db: "qafetcher", coll: "products"}}
//   ], (err) => {
//     if (err) { return cb(err, null) }
//     else { return cb(null, result) }
//   })

  Question.insertMany(entries, { ordered: false, rawResult: true }, (err, result) => {
    if (err) { return cb(err, null) }
    else { return cb(null, result) }
  })
};

exports.groupQuestions = (entries, cb) => {
  const options: { allowDiskUse : true }
  const pipeline = [
    { $match : { … } },
    { $group : { … } },
    { $sort : { … }  },
    { $project : {  } },
  ]

  db.collectionName.aggregate(pipeline, options)




  Question.insertMany(entries, { ordered: false, rawResult: true }, (err, result) => {
    if (err) { return cb(err, null) }
    else { return cb(null, result) }
  })
};

exports.groupAnswers = (entries, cb) => {
  const options: { allowDiskUse : true }
  const pipeline = [
    { $match : { … } },
    { $group : { … } },
    { $sort : { … }  },
    { $project : {  } },
  ]

  db.collectionName.aggregate(pipeline, options)




    Answer.insertMany(entries, { ordered: false, rawResult: true }, (err, result) => {
      if (err) { return cb(err, null) }
      else { return cb(null, result) }
    })
}

exports.groupPhotos = (entries, cb) => {
  const options: { allowDiskUse : true }
  const pipeline = [
    { $match : { … } },
    { $group : { … } },
    { $sort : { … }  },
    { $project : {  } },
  ]

  db.collectionName.aggregate(pipeline, options)



    Photo.insertMany(entries, { ordered: false, rawResult: true }, (err, result) => {
      if (err) { return cb(err, null) }
      else { return cb(null, result) }
    })
}