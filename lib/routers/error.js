//imports
const express = require('express');

//instances
const router = express.Router();

//routes
router.use(
  (request, response, next) => {
    response.render('404.pug', {
      view: {
        title: 'Page not found',
        route: null
      }
    });
  },
);

//exports
module.exports = router;