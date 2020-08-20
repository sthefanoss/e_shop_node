//imports
const authController = require('./auth');

//exports
module.exports.getHomePage =
    (request, response, next) => {
        response.render('home.pug', {
            products: authController.products,
            view: {
                title: "Shop",
                route: "/"
            },
        });
    };