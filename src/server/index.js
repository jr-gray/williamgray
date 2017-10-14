const express = require('express');
const path = require('path');
const router = require('./router');
const bodyParser = require('body-parser');
const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api', router);
app.get('*', express.static(path.join(__dirname, '../static')));

// start server
app.listen(8000, () => console.log('Serving at port 8000'));