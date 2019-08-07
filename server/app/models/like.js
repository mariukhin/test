const mongoose = require('mongoose');
const { Schema } = mongoose;

const likeSchema = new Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'
  },
  likeItemUrl: String,
});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;