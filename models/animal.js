const mongoose = require('mongoose');
const { Schema } = mongoose;

const animalSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true
  },
  weight: {
    type: Number,
    require: true
  },
  age: {
    type: Number,
    default: Date.now
  }

});

module.exports = mongoose.model('animal', animalSchema);