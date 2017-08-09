const express = require('express');
const path = require('path');
const request = require('request');
const async = require('async');
const cors = require('cors');

const settings = require('./settings.json');
const instagram = require('./routes/instagram');
const news = require('./routes/news');
const cnnews = require('./routes/cnnews');
const weather = require('./routes/weather');
const cv = require('./routes/cv');

const db = require('./model/db.js');


const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

//app.set('view engine', 'ejs');
//app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.redirect('/home');
});

app.use('/ins', instagram);
app.use('/news', news);
app.use('/cnnews', cnnews);
app.use('/weather', weather);
app.use('/cv', cv);


app.get('/home', (req, res) => {
  async.parallel([
    callback => {
      let cities = [];
      for (let i = 0; i < settings.weatherAPI.cities.length; i++) {
        cities.push(settings.weatherAPI.cities[i].id);
      }
      const citiesID = cities.join(',');
      const weatherData = [];
      request(`http://api.openweathermap.org/data/2.5/` +
              `group?id=${citiesID}` +
              `&APPID=${settings.weatherAPI.weatherID}`,
              function(error, response, body) {
                body = JSON.parse(body);
                for (let j = 0; j < body.list.length; j++) {
                  weatherData.push(body.list[j]);
                }
                callback(null, weatherData);
              }
        );
    },
    callback => {
      const newsData = [];
      request(`https://newsapi.org/v1/articles?` +
              `source=abc-news-au&sortBy=top&apiKey=` +
              `${settings.newsAPI.newsID}`,
              function(error, response, body) {
                body = JSON.parse(body);
                for (let k = 0; k < body.articles.length; k++) {
                  newsData.push(body.articles[k]);
                }
                callback(null, newsData);
              }
          );
    },
    callback => {
      const cnNewsData = [];
      request(`http://v.juhe.cn/toutiao/index?type=top&key=` +
              `0abbfce1321f89db95dba716bfc91348`,
              function(error, response, body) {
                body = JSON.parse(body);
                for (let l = 0; l < body.result.data.length; l++) {
                  cnNewsData.push(body.result.data[l]);
                }
                callback(null, cnNewsData);
              }
          );
    },
    callback => {
      const instagram = new Instagram({
        clientId: instagramAPI.clientId,
        clientSecret: instagramAPI.clientSecret,
        accessToken: instagramAPI.accessToken
      });

      instagram.get('users/self/media/recent').then((data) => {
        const imgs = data.data;
        callback(null, imgs);
      });
    }
  ], (err, results) => {
    res.json({
      weatherData: results[0],
      newsData: results[1],
      cnNewsData: results[2],
      imgs: results[3]
    });
  });
});

app.listen(3000, () => {
  console.log('The application is running on localhost:3000!');
});
