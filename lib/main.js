//imports
const express = require('express');

//instances
const server = express();

//routes
server.get('/add-product',
  (request, response, next) => {
    response.send('<form action="/add-product" method="POST"><input type="text" name="title"> <button type="submit">Add product </button> </form>');
  },
);

server.post('/add-product',
  (request, response, next) => {
    console.log(response);
    response.redirect('/');
  },
);

server.get('/',
  (request, response, next) => {
    response.send("<h1>Hello from home</h1>");
  },
);

//listening
server.listen(666);
