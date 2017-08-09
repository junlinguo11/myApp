const express = require('express');
const router = express.Router();
const request = require('retry-request');
const settings = require('../settings.json');

router.get('/', (req, res) => {
    const newsData = [];
    request(`https://newsapi.org/v1/articles?` +
              `source=abc-news-au&sortBy=top&apiKey=` +
              `${settings.newsAPI.newsID}`,
              function(error, response, body) {
                if(body) {
                  body = JSON.parse(body);
                  for (let i = 0; i < body.articles.length; i++) {
                    newsData.push(body.articles[i]);
                  }
                  res.json(newsData);
                } else {
                  res.json()
                }
              }
    );
});

module.exports = router;