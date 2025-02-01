const express = require('express');
const { toLowerCase, toUpperCase } = require('./utils/textUtils');
const { findMinimum, findMaximum } = require('./utils/numberUtils');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/util/text/lowercase', (req, res) => {
  const input = req.body.input;
  res.send({ output: toLowerCase(input) });
});

app.post('/util/text/uppercase', (req, res) => {
  const input = req.body.input;
  res.send({ output: toUpperCase(input) });
});

app.get('/util/number/minimum', (req, res) => {
  const inputs = req.query.input.split(',').map(Number);
  res.send({ output: findMinimum(inputs) });
});

app.get('/util/number/maximum', (req, res) => {
  const inputs = req.query.input.split(',').map(Number);
  res.send({ output: findMaximum(inputs) });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});