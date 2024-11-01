const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/createtodos', function (req, res) {

    
});

app.get('/gettodos', function (req, res) {
    res.send('Hello World!');
});

app.put('/completedtodos', function (req, res) {
    
});

app.listen(port);

