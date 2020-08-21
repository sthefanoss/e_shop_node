//imports
const express = require('express');
const authController = require('../controllers/auth');

//instances
const router = express.Router();

//routes
router.get('/add-product', authController.getAddProductPage);
router.post('/add-product', authController.postAddProduct);

//exports
module.exports = router;