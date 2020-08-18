//imports
const express = require('express');

//instances
const server = express();

//routes
server.use(
  (request, response, next) => {
    console.log('hello world');
    response.send("<h1>hello world</h1>");
  },
);

//listening
server.listen(666);
