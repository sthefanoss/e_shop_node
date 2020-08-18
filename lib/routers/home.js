//imports
const express = require('express');
const path = require('path');

//instances
const router = express.Router();

//routes
router.get('/',
  (request, response, next) => {
    response.sendFile(path.join(__dirname, './../views/home.html'));
  },
);

//exports
module.exports = router;

