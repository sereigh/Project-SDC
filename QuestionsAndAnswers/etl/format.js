exports.formatQuestions = (data, cb) => {
  const result = data.map((record) => ({
    product_id: Number(record.product_id),
    question_id: Number(record.question_id),
    question_body: record.question_body,
    question_date: record.question_date,
    asker_name: record.asker_name,
    asker_email: record.asker_email,
    question_helpfulness: Number(record.question_helpfulness),
    report: record.reported ? true : false,
  }));
  return cb(null, result);
};

exports.formatAnswers = (data, cb) => {
  const result = data.map((record) => ({
    answer_id: Number(record.id),
    question_id: Number(record.question_id),
    body: record.body,
    date_written: record.date_written,
    answerer_name: record.answerer_name,
    answerer_email: record.answerer_email,
    helpfulness: Number(record.helpful),
    report: record.reported ? true : false,
  }));
  return cb(null, result);
};

exports.formatPhotos = (data, cb) => {
  const result = data.map((record) => ({
    photo_id: Number(record.id),
    answer_id: Number(record.answer_id),
    url: record.url,
  }));
  return cb(null, result);
};

exports.formatProducts = (data, cb) => {
  const result = data.map((record) => ({
    product_id: Number(record.product_id),
  }));
  return cb(null, result);
};
