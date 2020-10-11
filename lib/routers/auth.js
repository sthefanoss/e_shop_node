//imports
const express = require('express');
const authController = require('../controllers/auth');

//instances
const router = express.Router();

//routes
router.get('/products', authController.getProductsPage);
router.get('/editor', authController.getProductEditorPage);
router.post('/product', authController.postProduct);
router.post('/product/:id/delete', authController.deleteProduct);

//exports
module.exports = router;