//imports
const express = require('express');

//instances
const router = express.Router();

//routes
router.use(
  (request, response, next) => {
    response.render('404.pug');
  },
);

//exports
module.exports = router;