const {
  formatAnswers,
  formatQuestions,
  formatPhotos,
  formatProducts,
} = require("./format.js");
const {
  loadAnswers,
  loadQuestions,
  loadPhotos,
  loadProducts,
} = require("./load.js");

const splitEntry = (entry) => entry.split(",");

exports.parseData = (entries, headers, cb) => {
  const objs = entries.map((entry, i) => {
    return splitEntry(entry).reduce(
      (obj, val, i) => ({
        ...obj,
        [headers[i]]: val.replace(/^"|"$/g, ""),
      }),
      {}
    );
  });
  return cb(null, objs, transformData);
};

const transformData = (tag, data, cb) => {
  if (tag === "q") {
    formatQuestions(data, (err, result) => {
      if (err) {
        return cb(err, null);
      } else return cb(null, result, loadQuestions);
    });
  } else if (tag === "a") {
    formatAnswers(data, (err, result) => {
      if (err) {
        return cb(err, null);
      } else return cb(null, result, loadAnswers);
    });
  } else if (tag === "p") {
    formatPhotos(data, (err, result) => {
      if (err) {
        return cb(err, null);
      } else return cb(null, result, loadPhotos);
    });
  } else if (tag === "pr") {
    formatProducts(data, (err, result) => {
      if (err) {
        return cb(err, null);
      } else return cb(null, result, loadProducts);
    });
  }
};
