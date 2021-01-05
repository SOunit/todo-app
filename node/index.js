const express = require('express');
const bodyParser = require('body-parser');

// const User = require('./models/user');
const mongoose = require('mongoose');
const Todo = require('./models/todo');

const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/mongo/todoList', (req, res, next) => {
  //Todo.create({ title: 'test title', user: 'test user' }).then((result) => {
  Todo.find().then((todos) => {
    res.send(todos);
  });
  // });
});

app.post('/mongo/todo', (req, res, next) => {
  Todo.create({ title: req.body.todoText, user: 'mongo user' }).then(
    (result) => {
      res.send(result);
      next();
    }
  );
});

mongoose
  .connect('mongodb://mongo:27017/todos')
  .then((result) => {
    app.listen(5000);
  })
  .catch((err) => {
    console.warn(err);
  });
