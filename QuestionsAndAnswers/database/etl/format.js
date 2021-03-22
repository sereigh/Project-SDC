
const formatQuestions = (data, cb) => {
  const result = data.map((record) => (
    {
      "product_id": Number(record.product_id),
      "question_id": Number(record.question_id),
      "question_body": record.question_body,
      "question_date": record.question_date,
      "asker_name": record.asker_name,
      "asker_email": record.asker_email,
      "question_helpfulness": Number(record.question_helpfulness),
      "reported": (record.reported ? true : false)
    }))
  return cb(null, result)
}

const formatAnswers = (data, cb) => {
  const result = data.map((record) => (
    {
      "id": Number(record.id),
      "question_id": Number(record.question_id),
      "body": record.body,
      "date_written": record.date_written,
      "answerer_name": record.answerer_name,
      "answerer_email": record.answerer_email,
      "helpful": Number(record.helpful),
      "reported": (record.reported ? true : false)
    }))
  return cb(null, result)
}

const formatPhotos = (data, cb) => {
  const result = data.map((record) => (
    {
      "id": Number(record.id),
      "answer_id": Number(record.answer_id),
      "url": record.url,
    }))
  return cb(null, result)
}
