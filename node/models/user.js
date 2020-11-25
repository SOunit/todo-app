const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/users', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once('open', () => {
    console.log('mongo db connect');
  })
  .on('error', (error) => {
    console.warn('Warning', error);
  });

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
