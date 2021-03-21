const express = require('express');
const routes = require('./routes.js');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

app.listen(PORT, (err) => {
  if (err) { console.error('ERROR in express: ', err); } else { console.log(`Service listening at http://localhost:${PORT}`); }
});
