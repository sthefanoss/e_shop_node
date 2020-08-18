//imports
const express = require('express');
const authRouter = require('./auth.js');

//instances
const router = express.Router();
const products = authRouter.products;

//routes
router.get('/',
  (request, response, next) => {
    response.render('home.pug', {
      products: products,
      view: {
        title: "Shop",
        route: "/"
      },
    });
  },
);

//exports
module.exports = router;