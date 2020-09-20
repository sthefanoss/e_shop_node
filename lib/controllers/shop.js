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

module.exports.getProductPage =
    (request, response, next) => {
        const product = Product.findById(request.params.id);

        if(product == null){
            response.redirect('/products');
            return;
        }
        
        response.render(path.join('pages', 'shop', 'product'), {
            product: product,
            view: {
                title: product.title,
                route: "/products"
            },
        });
    };

module.exports.getCartPage =
    (request, response, next) => {
        response.render(path.join('pages', 'shop', 'cart'), {
            view: {
                title: "Your Cart",
                route: "/cart"
            },
        });
    };

module.exports.getOrdersPage =
    (request, response, next) => {
        response.render(path.join('pages', 'shop', 'orders'), {
            view: {
                title: "Your Orders",
                route: "/orders"
            },
        });
    };