const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myApp', () => {
  console.log('mongodb connected');
});

module.exports = mongoose;
