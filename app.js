var express = require('express');
var app = express();
var config = require( './config/config.js' );

config(app, express);
module.exports = app;
