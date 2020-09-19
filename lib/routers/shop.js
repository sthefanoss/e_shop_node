//imports
const express = require('express');
const shopController = require('../controllers/shop');

//instances
const router = express.Router();

//routes
router.get('/products', shopController.getProductsPage);
router.get('/cart', shopController.getCartPage);
router.get('/orders', shopController.getOrdersPage);
router.get('/', shopController.getShopPage);

//exports
module.exports = router;