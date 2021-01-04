const express = require('express');
// const User = require('./models/user');
const Todo = require('./models/todo');

const app = express();

app.get('/mongo/todoList', (req, res, next) => {
  const newTodo = new Todo({ title: 'test title', user: 'test user' });
  newTodo.save().then(() => {
    Todo.find().then((todos) => {
      res.send(todos);
    });
  });
});

app.listen(5000);
