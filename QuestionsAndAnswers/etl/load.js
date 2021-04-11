const mongoose = require("mongoose");
const { Answer, Question, Photo, Report, Product } = require("./index.js");

exports.loadQuestions = (entries, cb) => {
  Question.insertMany(
    entries,
    { ordered: false, rawResult: true },
    (err, result) => {
      if (err) {
        return cb(err, null);
      } else {
        return cb(null, result);
      }
    }
  );
};

exports.loadAnswers = (entries, cb) => {
  Answer.insertMany(
    entries,
    { ordered: false, rawResult: true },
    (err, result) => {
      if (err) {
        return cb(err, null);
      } else {
        return cb(null, result);
      }
    }
  );
};

exports.loadPhotos = (entries, cb) => {
  Photo.insertMany(
    entries,
    { ordered: false, rawResult: true },
    (err, result) => {
      if (err) {
        return cb(err, null);
      } else {
        return cb(null, result);
      }
    }
  );
};

exports.loadProducts = (entries, cb) => {
  Product.insertMany(
    entries,
    { ordered: false, rawResult: true },
    (err, result) => {
      if (err) {
        return cb(err, null);
      } else {
        return cb(null, result);
      }
    }
  );
};
