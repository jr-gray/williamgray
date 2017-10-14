const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const bodyparser = require('body-parser');

// app.use(bodyparser.urlencoded({ extended: true }));

app.get('*', express.static(path.join(__dirname, '../static')));


app.listen(8000, () => console.log('Serving at port 8000'))