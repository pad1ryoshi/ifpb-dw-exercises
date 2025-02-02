const express = require('express');
const { toLowerCase, toUpperCase } = require('./utils/textUtils');
const { findMinimum, findMaximum } = require('./utils/numberUtils');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/util/text/lowercase', (req, res) => {
  const input = req.body.input;
  res.send({
    action: 'lowercase',
    input: input,
    output: toLowerCase(input)
  });
});

app.post('/util/text/uppercase', (req, res) => {
  const input = req.body.input;
  res.send({
    action: 'uppercase',
    input: input,
    output: toUpperCase(input)
  });
});

app.get('/util/number/minimum', (req, res) => {
  const inputs = req.query.input.split(',');
  const numericInputs = inputs.map(Number);
  res.send({
    action: 'minimum',
    input: inputs,
    output: findMinimum(numericInputs).toString()
  });
});

app.get('/util/number/maximum', (req, res) => {
  const inputs = req.query.input.split(',');
  const numericInputs = inputs.map(Number);
  res.send({
    action: 'maximum',
    input: inputs,
    output: findMaximum(numericInputs).toString()
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});