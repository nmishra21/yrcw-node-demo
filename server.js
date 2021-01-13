'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  //res.send('Hello World');
  res.sendFile('yrcsite.html', {root: __dirname});
});

app.use(express.static('yrcsite_files'))

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
