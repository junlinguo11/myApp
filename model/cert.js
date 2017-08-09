const mongoose = require('mongoose');

const certSchema = new mongoose.Schema({
    abbr: String,
    name: String,
    date: Date
});

const Cert = mongoose.model('Cert', certSchema);

module.exports = Cert;