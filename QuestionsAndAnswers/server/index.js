require('newrelic');
const express = require('express');
const routes = require('./routes/router.js');

if(process.env.NODE_ENV !== "production") {
  require('dotenv-safe').config();
}

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

app.listen(PORT, (err) => {
  if (err) { console.error('Error in express: ', err); } else { console.log(`Service is listening on port ${PORT}`); }
});
