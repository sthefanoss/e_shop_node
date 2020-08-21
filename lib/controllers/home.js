//imports
const Product = require('../models/product');
const path = require('path');

//exports
module.exports.getHomePage =
    (request, response, next) => {
        response.render(path.join('home', 'home'), {
            products: Product.getAll(),
            view: {
                title: "Shop",
                route: "/"
            },
        });
    };