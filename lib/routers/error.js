//imports
const express = require('express');
const path = require('path');

//instances
const router = express.Router();

//routes
router.use(
  (request, response, next) => {
    response.sendFile(path.join(__dirname, './../views/404.html'));
  },
);

//exports
module.exports = router;

