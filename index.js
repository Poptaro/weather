const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
    app.use(express.static(path.join(__dirname)));
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.listen(port);