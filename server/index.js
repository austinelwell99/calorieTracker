const path = require('path');
const express = require('express');
const { KEY } = require('../config.js');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/webcams', (req, res) => {
  let config = {
    method: 'get',
    url: `https://api.windy.com/api/webcams/v2/list/property=live?show=webcams:category,player,image,location,statistics`,
    headers: { 'x-windy-key': KEY },
  };

  axios(config)
    .then((data) => {
      res.status(200).send(data.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
