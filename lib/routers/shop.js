//imports
const express = require('express');
const shopController = require('../controllers/shop');

//instances
const router = express.Router();

//routes
router.get('/products', shopController.getProductsPage);
router.get('/products/:id', shopController.getProductPage);
router.get('/cart', shopController.getCartPage);
router.post('/cart', shopController.postCart);
router.get('/orders', shopController.getOrdersPage);
router.get('/', shopController.getShopPage);

//exports
module.exports = router;