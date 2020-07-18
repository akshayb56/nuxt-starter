const express = require('express');
const db = require('./db');
const app = express();

app.use('/users', require('./users'));

module.exports = {
  path: '/api/',
  handler: app
}