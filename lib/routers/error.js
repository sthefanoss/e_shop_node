//imports
const express = require('express');

//instances
const router = express.Router();

//routes
router.use(
  (request, response, next) => {
    response.send("<h1>Page not found!</h1>");
  },
);

//exports
module.exports = router;

