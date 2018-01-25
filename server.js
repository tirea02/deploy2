const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(9999,'0.0.0.0' () => {
    console.info('Running on port 9999');
});


// Routes
app.use('/api/discord', require('./api/discord'));


app.use((err, req, res, next) => {
    switch (err.message) {
case 'NoCodeProvided':
    return res.status(400).send({
        status: 'ERROR',
        error: err.message,
    });
default:
    return res.status(500).send({
        status: 'ERROR',
        error: err.message,
    });
}
});
