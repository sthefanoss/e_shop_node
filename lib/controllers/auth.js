//imports
const Product = require('../models/product');
const path = require('path');

//exports
module.exports.getProductsPage = (request, response) => 
    {
        response.render(path.join('pages', 'auth', 'products'), {
            products: Product.getAll(),
            view: {
                title: 'Your Products',
                route: '/auth/products'
            },
        });
    };

module.exports.getProductEditorPage = (request, response) => 
    {
        const isEditing = request.query.id != null;

        response.render(path.join('pages', 'auth', 'editor'), {
            isEditing: isEditing,
            product: isEditing ? Product.findById(request.query.id) : null,
            view: {
                title: isEditing ? 'Edit Product' : 'Create Product',
                route: isEditing ?  '/auth/products' : '/auth/editor',
            }
        });
    };

module.exports.postProduct = (request, response) => 
    {
        const isEditing = request.body.id != null;

        const product = Product.fromRequestBody(request.body);

        if(isEditing)
            Product.update(product);
        else
            Product.add(product);

        Product.saveData();

        response.redirect('/auth/products');
    };

module.exports.deleteProduct = (request, response) =>
    {   
        Product.delete(request.params.id);
        
        Product.saveData();

        response.redirect('/auth/products');
    };