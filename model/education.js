const mongoose = require('mongoose');

const eduSchema = new mongoose.Schema({
    school: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  startTime: {
    type: String,
    required: true,
    trim: true
  },
  endTime: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  grades: {
    type: Array,
    required: true
  }
});

const Education = mongoose.model('Education', eduSchema);

module.exports = Education;