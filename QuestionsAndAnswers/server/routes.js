const express = require('express');
const router = express.Router();
const db = require('../Database/queries.js');

router.get('/', (req, res) => {
  console.log('get got');
});


router.get('/qa/questions', (req, res) => {
  const params = [req.query.product_id, req.query.page, req.query.count]

  res.status(200).send('OK')
})

router.get('/qa/questions/:question_id/answers', (req, res) => {
  const params = [req.params.question_id, req.query.page, req.query.count]

  res.status(200).send('OK')
})

router.post('/qa/questions', (req, res) => {
  const pId = req.query.product_id
  const data = req.body

  res.status(201).send('CREATED')
})

router.post('/qa/questions/:question_id/answers', (req, res) => {
  const qId = req.params.question_id
  const data = req.body

  res.status(201).send('CREATED')
})

router.put('/qa/questions/:question_id/helpful', (req, res) => {
  const qId = req.params.question_id

  res.status(204).end()
})

router.put('/qa/questions/:question_id/report', (req, res) => {
  const qId = req.params.question_id

  res.status(204).end()
})

router.put('/qa/answers/:answer_id/helpful', (req, res) => {
  const aId = req.params.answer_id

  res.status(204).end()
})

router.put('/qa/answers/:answer_id/report', (req, res) => {
  const aId = req.params.answer_id

  res.status(204).end()
})

module.exports = router;