//imports
const express = require('express');
const bodyParser = require('body-parser');

//instances
const server = express();

//state
const products = [];

//middlewares
server.use(bodyParser.urlencoded({ extended: false }));

//routes
server.get('/add-product',
  (request, response, next) => {
    response.send('<form action="/add-product" method="POST"><input type="text" name="title"> <button type="submit">Add product </button> </form>');
  },
);

server.post('/add-product',
  (request, response, next) => {
    let newProduct = request.body;

    products.push(newProduct);
    console.log(products);

    response.redirect('/add-product');
  },
);

server.get('/',
  (request, response, next) => {
    response.send("<h1>Hello from home</h1>");
  },
);

//listening
server.listen(666);
