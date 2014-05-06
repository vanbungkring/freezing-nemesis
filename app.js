var express = require('express');
var app = express();
var config = require('./config/expressc.js');

config(app, express);
module.exports = app;