//imports
const Product = require('../models/product');
const Cart = require('../models/cart');
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

    if(isEditing){
        Cart.onProductsUpdate(Product.getAll());
        Cart.saveData();
    }

    response.redirect('/auth/products');
};

module.exports.deleteProduct = (request, response) =>
{   
    Product.delete(request.params.id);
    Cart.onProductsUpdate(Product.getAll());

    Product.saveData();
    Cart.saveData();

    response.redirect('/auth/products');
};