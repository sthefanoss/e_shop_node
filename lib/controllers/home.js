//imports
const Product = require('../models/product');

//exports
module.exports.getHomePage =
    (request, response, next) => {
        response.render('home.pug', {
            products: Product.getAll(),
            view: {
                title: "Shop",
                route: "/"
            },
        });
    };