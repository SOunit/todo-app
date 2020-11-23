const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send('[/]from node!');
});

app.get('/node', (req, res, next) => {
  res.send('[/node]from node!');
});

app.listen(5000);
