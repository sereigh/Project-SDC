require('newrelic');
const express = require('express');
const routes = require('./router.js');
const path = require('path');
const cors = require("cors");

const app = express();
const PORT = 8080;

// app.use(express.static('server'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

app.listen(PORT, (err) => {
  if (err) { console.error('ERROR in express: ', err); } else { console.log(`Service listening at http://localhost:${PORT}`); }
});
