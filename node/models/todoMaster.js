const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoMasterSchema = new Schema({
  title: String,
  user: String,
});

const TodoMaster = mongoose.model('todo_master', TodoMasterSchema);

module.exports = TodoMaster;
