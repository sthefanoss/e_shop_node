//imports
const Product = require('../models/product');
const path = require('path');

//exports
module.exports.getYourProductsPage =
    (request, response, next) => {
        response.render(path.join('pages', 'auth', 'your-products'), {
            view: {
                title: 'Your Products',
                route: '/admin/your-products'
            }
        });
    };

module.exports.getAddProductPage =
    (request, response, next) => {
        response.render(path.join('pages', 'auth', 'add-product'), {
            view: {
                title: 'Add Product',
                route: '/admin/add-product'
            }
        });
    };

module.exports.postAddProduct =
    (request, response, next) => {
        let newProductData = request.body;
        let newProduct = new Product(
            newProductData.title,
            19.99,
            "Some description",
            `http://api.adorable.io/avatars/${Product.getCount()}`,
        );
        newProduct.save();

        response.redirect('/admin/add-product');
    };