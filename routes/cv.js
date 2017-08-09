const express = require('express');
const router = express.Router();
const settings = require('../settings.json');
const Education = require('../model/education');
const Skill = require('../model/skill');
const Cert = require('../model/cert');
const Language = require('../model/language');

router.get('/edu', (req, res) => {
    Education.find({}, (err, edu) => {
        res.json(edu);
    });
});

router.get('/skill', (req, res) => {
    Skill.find({}, (err, skill) => {
        res.json(skill);
    });
});

router.get('/cert', (req, res) => {
    Cert.find({}, (err, cert) => {
        res.json(cert);
    });
});

router.get('/language', (req, res) => {
    Language.find({}, (err, language) => {
        res.json(language);
    });
});

module.exports = router;