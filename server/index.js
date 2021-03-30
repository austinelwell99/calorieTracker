const path = require('path');
const express = require('express');
const KEY = require('../config.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
