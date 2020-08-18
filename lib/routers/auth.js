//imports
const express = require('express');

//instances
const router = express.Router();

//state
const products = [];

//routes
router.get('/add-product',
  (request, response, next) => {
    response.render('add-product.pug');
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
module.exports.products = products;