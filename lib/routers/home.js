//imports
const express = require('express');
const homeController = require('../controllers/home');

//instances
const router = express.Router();

//routes
router.get('/', homeController.getHomePage);

//exports
module.exports = router;