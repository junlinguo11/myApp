const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    language: Array,
    framework: Array,
    database: Array,
    library: Array,
    runtimeEnvirnment: String,
    developmentTools: Array,
    versionControl: Array,
    software: Array
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;