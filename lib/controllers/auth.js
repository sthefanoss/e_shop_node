//imports
const Product = require('../models/product');

//exports
module.exports.getAddProductPage =
    (request, response, next) => {
        response.render('add-product.pug', {
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