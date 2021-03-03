const express = require('express');
const bodyParser = require('body-parser');

// const User = require('./models/user');
const mongoose = require('mongoose');
const Todo = require('./models/todo');
const TodoMaster = require('./models/todoMaster');
const Complete = require('./models/complete');

const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// =========================
// todo
// =========================
app.get('/mongo/todoList', (req, res, next) => {
  Todo.find().then((todos) => {
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

app.post('/mongo/delete/todoList', (req, res, next) => {
  let idList = [];
  req.body.todoList.forEach((todo) => {
    idList.push(mongoose.Types.ObjectId(todo._id));
  });
  Todo.find({ _id: { $in: idList } })
    .remove()
    .then(() => {
      res.send('delete ok');
    });
});

// =========================
// master
// =========================
app.get('/mongo/todoMasterList', (req, res, next) => {
  TodoMaster.find().then((todos) => {
    res.send(todos);
  });
});

app.post('/mongo/todo_master', (req, res, next) => {
  TodoMaster.create({ title: req.body.todoText, user: 'mongo user' }).then(
    (result) => {
      res.send(result);
    }
  );
});

app.post('/mongo/delete/todoMasterList', (req, res, next) => {
  let idList = [];
  req.body.todoMasterList.forEach((todo) => {
    idList.push(mongoose.Types.ObjectId(todo._id));
  });
  TodoMaster.find({ _id: { $in: idList } })
    .remove()
    .then(() => {
      res.send('delete ok');
    });
});

// =========================
// complete
// =========================
app.get('/mongo/complete', (req, res, next) => {
  Complete.find().then((todos) => {
    res.send(todos);
  });
});

app.post('/mongo/complete', (req, res, next) => {
  req.body.completeList.forEach((todo) => {
    const completedTodo = {};
    completedTodo.title = todo.title;
    completedTodo.user = todo.user;
    Complete.create(completedTodo);
  });

  // FIXME: exec multiple query and return one result
  // to avoid console error, node should return something by res.send();
  next();
});

mongoose
  .connect('mongodb://mongo:27017/todos')
  .then((result) => {
    app.listen(5000);
  })
  .catch((err) => {
    console.warn(err);
  });
