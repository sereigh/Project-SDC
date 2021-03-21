const express = require('express');
const router = express.Router();

const { questions, answers } = require('./routes/get.js');
const { question, answer } = require('./routes/post.js')

router.route('/qa/questions')
  .get(questions)
  .post(question)

router.route('*/answers')
  .get(answers)
  .post(answer)

router.route('/qa/*/helpful')
  // .put(helpfulAnswer)
  // .put(helpfulQuestion)

router.route('/qa/*/report')
  // .put(reportAnswer)
  // .put(reportQuestion)

module.exports = router;
