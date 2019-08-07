const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  nickName: String,
  password: String,
  email: String,
  authorised: Boolean,
  likes: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Like'
  }],
  history: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'History'
  }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;