//imports
const express = require('express');

//instances
const router = express.Router();

//state
const products = [];

//routes
router.get('/add-product',
  (request, response, next) => {
    response.send('<form action="/add-product" method="POST"><input type="text" name="title"> <button type="submit">Add product </button> </form>');
  },
);

router.post('/add-product',
  (request, response, next) => {
    let newProduct = request.body;

    products.push(newProduct);
    console.log(products);

    response.redirect('/add-product');
  },
);

//exports
module.exports = router;

