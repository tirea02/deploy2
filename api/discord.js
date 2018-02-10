const express = require('express');
const fetch = require('node-fetch');
const btoa = require('btoa');
const { catchAsync } = require('../utils');
var userData;
var token;


const router = express.Router();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const redirect = encodeURIComponent('http://localhost:50451/api/discord/callback');
const app = express();
app.use(express.json());


router.get('/login', (req, res) => {
    res.redirect(`https://discordapp.com/oauth2/authorize?client_id=${CLIENT_ID}&scope=identify&response_type=code&redirect_uri=${redirect}`);
});

module.exports = router;


router.get('/callback', catchAsync(async (req, res) => {
    if (!req.query.code) throw new Error('NoCodeProvided');
const code = req.query.code;
const creds = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
const response = await fetch(`https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${code}&redirect_uri=${redirect}`,
    {
        method: 'POST',
        headers: {
            Authorization: `Basic ${creds}`,
        },
    });
const json = await response.json();
token = json.access_token;
//res.redirect(`/api/discord/test`);
res.redirect(`/?token=${json.access_token}`);
}));


router.get('/username', catchAsync(async (req, res) => {
   // if (!req.query.code) throw new Error('NoCodeProvided');
    console.log(token)
const creds = btoa(token);
const request = await fetch(`http://discordapp.com/api/users/@me`,
    {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
const json = await request.json();
    res.json(json);
}));

