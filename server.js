const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

// app.get('/', (req, res) => {
//     res.status(200).sendFile(path.join(__dirname, 'index.html'));
// });

app.get('/', function(req, res) {
    res.render('index', {
        userData : 'test'
    });
});

app.get('/index-ko', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'index-ko.html'));
});

app.get('/team', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'team.html'));
});

app.get('/generic', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'generic.html'));
});

app.get('/generic-ko', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'generic-ko.html'));
});

app.get('/team-ko', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'team-ko.html'));
});


// app.listen(50451, () => {
//     console.info('Running on local');
// });

app.listen(9999, '0.0.0.0', () => {
    console.info('Running on port 9999');
});


// Routes
app.use('/api/discord', require('./api/discord'));
app.use(express.static('static'));
// app.use(express.static('images'));

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
