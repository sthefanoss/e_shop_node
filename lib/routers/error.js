//imports
const express = require('express');
const errorController = require('../controllers/error');

//instances
const router = express.Router();

//routes
router.use(errorController.getError404Page);

//exports
module.exports = router;