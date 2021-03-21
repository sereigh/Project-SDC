const express = require('express');
const router = express.Router();

const { questions, answers } = require('./routes/get.js');
const { question, answer } = require('./routes/post.js')
const { helpfulAnswer, helpfulQuestion } = require('./routes/helpful.js')
const { reportAnswer, reportQuestion } = require('./routes/report.js')

router.route('/qa/questions')
  .get(questions)
  .post(question)

router.route('*/answers')
  .get(answers)
  .post(answer)

router.route('/qa/questions/*/helpful')
  .put(helpfulQuestion)

router.route('/qa/answers/*/helpful')
  .put(helpfulAnswer)

router.route('/qa/questions/*/report')
.put(reportQuestion)

router.route('/qa/answers/*/report')
.put(reportAnswer)

module.exports = router;
