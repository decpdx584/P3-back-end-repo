const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  favedGames: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game'
  }]
});

module.exports = mongoose.model('User', userSchema);