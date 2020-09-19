//imports
const Product = require('../models/product');
const path = require('path');

//exports
module.exports.getShopPage =
    (request, response, next) => {
        response.render(path.join('pages', 'shop', 'shop'), {
            products: Product.getAll(),
            view: {
                title: "Shop",
                route: "/"
            },
        });
    };

module.exports.getProductsPage =
    (request, response, next) => {
        response.render(path.join('pages', 'shop', 'products'), {
            products: Product.getAll(),
            view: {
                title: "Products",
                route: "/products"
            },
        });
    };

module.exports.getCartPage =
    (request, response, next) => {
        response.render(path.join('pages', 'shop', 'cart'), {
            products: Product.getAll(),
            view: {
                title: "Cart",
                route: "/cart"
            },
        });
    };