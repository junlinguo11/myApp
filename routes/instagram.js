const express = require('express');
const router = express.Router();
const Instagram = require('node-instagram').default;

const settings = require('../settings.json');
const instagramAPI = settings.instagramAPI;

router.get('/', (req, res) => {
    const instagram = new Instagram({
        clientId: instagramAPI.clientId,
        clientSecret: instagramAPI.clientSecret,
        accessToken: instagramAPI.accessToken
    });

    instagram.get('users/self/media/recent/?count=15').then((data) => {
        const images = data.data;
        res.json(images);
    });
});

module.exports = router;