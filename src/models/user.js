const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  title: String,
  email: String,
  username: String,
  password: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model('User', userSchema);
