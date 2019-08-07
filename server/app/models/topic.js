const mongoose = require('mongoose');
const { Schema } = mongoose;

const topicSchema = new Schema({
  path: String,
  name: String,
  count: Number,
});


const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;