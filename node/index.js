const express = require('express');
const bodyParser = require('body-parser');

// const User = require('./models/user');
const mongoose = require('mongoose');
const Todo = require('./models/todo');
const TodoMaster = require('./models/todoMaster');

const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/mongo/todoList', (req, res, next) => {
  Todo.find().then((todos) => {
    res.send(todos);
  });
});

app.get('/mongo/todoMasterList', (req, res, next) => {
  TodoMaster.find().then((todos) => {
    res.send(todos);
  });
});

app.post('/mongo/todo', (req, res, next) => {
  req.body.todoList.forEach((todo) => {
    const newTodo = {};
    newTodo.title = todo.title;
    newTodo.user = todo.user;
    Todo.create(newTodo);
  });

  // FIXME: exec multiple query and return one result
  next();
});

app.post('/mongo/todo_master', (req, res, next) => {
  TodoMaster.create({ title: req.body.todoText, user: 'mongo user' }).then(
    (result) => {
      res.send(result);
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
