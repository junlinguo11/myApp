const express = require('express');
const router = express.Router();
const request = require('retry-request');
const settings = require('../settings.json');

router.get('/', (req, res) => {
    const cnNewsData = [];
    request(`http://v.juhe.cn/toutiao/index?type=guonei&key=` +
              `0abbfce1321f89db95dba716bfc91348`,
              function(error, response, body) {
                body = JSON.parse(body);
                for (let l = 0; l < 10; l++) {
                  cnNewsData.push(body.result.data[l]);
                }
                res.json(cnNewsData);
              }
    );
});

module.exports = router;