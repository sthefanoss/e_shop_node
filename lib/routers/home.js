//imports
const express = require('express');

//instances
const router = express.Router();

//routes
router.get('/',
  (request, response, next) => {
    response.render('home.pug');
  },
);

//exports
module.exports = router;