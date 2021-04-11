const express = require('express');
const router = express.Router();

const { questions, answers } = require('./get.js');
const { question, answer } = require('./post.js')
const { helpfulAnswer, helpfulQuestion } = require('./helpful.js')
const { reportAnswer, reportQuestion } = require('./report.js')

router.route('/')
  .get((req, res) => {
    res.status(200).end()
  })

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
