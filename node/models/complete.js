const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CompleteSchema = new Schema({
  title: String,
  user: String,
});

const Complete = mongoose.model('complete', CompleteSchema);

module.exports = Complete;
