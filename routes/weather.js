const express = require('express');
const router = express.Router();
const request = require('retry-request');
const settings = require('../settings.json');

router.get('/', (req, res) => {
    let cities = [];
      for (let i = 0; i < settings.weatherAPI.cities.length; i++) {
        cities.push(settings.weatherAPI.cities[i].id);
      }
      const citiesID = cities.join(',');
      const weatherData = [];
      request(`http://api.openweathermap.org/data/2.5/` +
              `group?id=${citiesID}` +
              `&units=metric` +
              `&APPID=${settings.weatherAPI.weatherID}`,
              function(error, response, body) {
                body = JSON.parse(body);
                for (let j = 0; j < body.list.length; j++) {
                  weatherData.push(body.list[j]);
                }
                res.json(weatherData);
              }
        );
});

module.exports = router;