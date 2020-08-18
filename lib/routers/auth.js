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
    newProduct.imageUrl = "https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/original.jpeg";
    newProduct.price = 19.99 * products.length;
    newProduct.description = "Some description";
    products.push(newProduct);
    console.log(products);

    response.redirect('/admin/add-product');
  },
);

//exports
module.exports = router;
module.exports.products = products;