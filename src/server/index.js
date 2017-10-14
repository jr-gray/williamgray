const express = require('express');
const path = require('path');
const app = express();

app.get('*', express.static(path.join(__dirname, '../static')));

app.listen(8000, () => console.log('Serving at port 8000'))