const mongoose = require('mongoose');
mongoose.connect('mongodb:mongo/todos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once('open', () => {
    console.log('mongo db connect');
  })
  .on('error', (err) => {
    console.warn('Mongo DB Connection Warning', err);
  });

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: String,
  user: String,
});

const Todo = mongo.model('todo', TodoSchema);

module.exports = Todo;
