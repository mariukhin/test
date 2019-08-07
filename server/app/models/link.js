const mongoose = require('mongoose');
const { Schema } = mongoose;

const linkSchema = new Schema({
  path: String,
  name: String,
});


const Link = mongoose.model('Link', linkSchema);

module.exports = Link;