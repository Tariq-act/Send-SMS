const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const pino = require('express-pino-logger')();
const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);

app.post('/api/messages', (req, res) => {
  res.header('Content-Type', 'application/json');
  let to = req.body.to;
  to = `+91${to.inputNumber}`;

  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: to,
      body: 'Hii this message comming from react app',
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch((err) => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

app.listen(8000, console.log('server in running'));
