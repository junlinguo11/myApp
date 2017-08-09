const express = require('express');
const path = require('path');
const request = require('request');

const settings = require('./settings.json');
const instagram = require('./routes/instagram');
const news = require('./routes/news');
const cnnews = require('./routes/cnnews');
const weather = require('./routes/weather');
const cv = require('./routes/cv');

const db = require('./model/db.js');


const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/ins', instagram);
app.use('/news', news);
app.use('/cnnews', cnnews);
app.use('/weather', weather);
app.use('/cv', cv);

app.listen(3000, () => {
  console.log('The application is running on localhost:3000!');
});
