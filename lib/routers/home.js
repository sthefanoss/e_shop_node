//imports
const express = require('express');

//instances
const router = express.Router();

//routes
router.get('/',
  (request, response, next) => {
    response.send("<h1>Hello from home</h1>");
  },
);

//exports
module.exports = router;

