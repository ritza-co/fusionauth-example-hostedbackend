const http = require('http');
const express = require('express');
const session = require("express-session");
const passport = require('passport');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());
require('./authentication')(app);
app.get('/', function (req, res, next) { res.sendFile('/app/index.html'); });
app.get('/favicon.ico', function (req, res, next) { return res.send(null); });
app.get('/login', passport.authenticate('oauth2'));
app.get('/auth/callback', passport.authenticate('oauth2', {successRedirect: '/', failureRedirect: '/'}));
app.get('/getUser', function (req, res, next) { return res.send(req.user); });
app.set('port', 3000);
const server = http.createServer(app);
server.listen(3000, '0.0.0.0');
