//imports
const Product = require('../models/product');
const path = require('path');

//exports
module.exports.getYourProductsPage =
    (request, response, next) => {
        response.render(path.join('pages', 'auth', 'your-products'), {
            products: Product.getAll(),
            view: {
                title: 'Your Products',
                route: '/auth/your-products'
            },
        });
    };

module.exports.getAddProductPage =
    (request, response, next) => {
        response.render(path.join('pages', 'auth', 'add-product'), {
            view: {
                title: 'Add Product',
                route: '/auth/add-product'
            }
        });
    };

module.exports.postAddProduct =
    (request, response, next) => {   
        const newProduct = Product.fromRequestBody(request.body);
        newProduct.save();

        response.redirect('/auth/your-products');
    };