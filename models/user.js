const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true,
    minlength: [5, 'Name is too shoert'],
    maxlength: 15,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    minlength: [6, 'Password is too shoert'],
    maxlength: 70,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model('user', userSchema);
