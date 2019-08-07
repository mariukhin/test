const mongoose = require('mongoose');
const { Schema } = mongoose;

const historySchema = new Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'
  },
  history: Array
});

const History = mongoose.model('History', historySchema);

module.exports = History;