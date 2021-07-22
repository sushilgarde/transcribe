const path = require('path');
const PORT = process.env.PORT || 3000

const express = require("express");
const app = express();

const serveStatic = require('serve-static');

const http = require('http');
const server = http.createServer(app);


app.use('/', serveStatic(path.join(__dirname, '../dist')));


server.listen(PORT, function(){
  return console.log('Running on port '+PORT);
})