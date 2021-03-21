// router.get('/', (req, res) => {
//   res.status(200).send(res);
// });

// router.get('/qa/questions/:question_id/answers', (req, res) => {
//   const params = [req.params.question_id, req.query.page, req.query.count]
//   db.getAllAnswers(params, (err, result) => {
//     if (err) { res.status(404).send(err) }
//     else { res.status(201).send(result) }
//   })
// })

// router.post('/qa/questions', (req, res) => {
//   // const pId = req.query.product_id
//   const data = req.body
//   db.saveQuestion(data, (err, result) => {
//     if (err) { res.status(404).send(err) }
//     else { res.status(201).send(result) }
//   })
// })

// router.post('/qa/questions/:question_id/answers', (req, res) => {
//   // const qId = req.params.question_id
//   const data = req.body
//   db.saveAnswer(data, (err, result) => {
//     if (err) { res.status(404).send(err) }
//     else { res.status(201).send(result) }
//   })
// })

// router.put('/qa/questions/:question_id/helpful', (req, res) => {
//   const qId = req.params.question_id
//   db.rateQuestionHelpful(qId, (err, result) => {
//     if (err) { res.status(404).send(err) }
//     else { res.status(204).end() }
//   })
// })

// router.put('/qa/questions/:question_id/report', (req, res) => {
//   const qId = req.params.question_id
//   db.reportQuestion(qId, (err, result) => {
//     if (err) { res.status(404).send(err) }
//     else { res.status(204).end() }
//   })
// })

// router.put('/qa/answers/:answer_id/helpful', (req, res) => {
//   const aId = req.params.answer_id
//   db.rateAnswerHelpful(aId, (err, result) => {
//     if (err) { res.status(404).send(err) }
//     else { res.status(204).end() }
//   })
// })

// router.put('/qa/answers/:answer_id/report', (req, res) => {
//   const aId = req.params.answer_id
//   db.reportAnswer(aId, (err, result) => {
//     if (err) { res.status(404).send(err) }
//     else { res.status(204).end() }
//   })
// })