const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({
    name: String,
    isFirst: Boolean,
    Exam: Array
});

const Language = mongoose.model('Language', languageSchema);

module.exports = Language;