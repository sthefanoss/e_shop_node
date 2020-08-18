//imports
const express = require('express');
const path = require('path');

//instances
const router = express.Router();

//state
const products = [];

//routes
router.get('/add-product',
  (request, response, next) => {
    response.sendFile(path.join(__dirname, './../views/add-product.html'));
  },
);

router.post('/add-product',
  (request, response, next) => {
    let newProduct = request.body;

    products.push(newProduct);
    console.log(products);

    response.redirect('/admin/add-product');
  },
);

//exports
module.exports = router;

