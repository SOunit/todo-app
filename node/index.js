const express = require('express');
const User = require('./models/user');

const app = express();

app.get('/name', (req, res, next) => {
  res.send({ name: 'Name from node!' });
});

app.get('/mongo/name', (req, res, next) => {
  console.log('[/mongo/name]');
  const joe = new User({ name: 'Name from mongo!' });
  joe.save().then(() => {
    console.log('[save done]');
    User.findOne({ _id: joe._id }).then((user) => {
      console.log(user);
      res.send(user);
    });
  });
});

app.listen(5000);
