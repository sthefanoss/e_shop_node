//imports
const Product = require('../models/product');
const Cart = require('../models/cart');
const path = require('path');

//exports
module.exports.getShopPage = (request, response) =>
{
    response.render(path.join('pages', 'shop', 'shop'), {
        products: Product.getAll(),
        view: {
            title: "Shop",
            route: "/"
        },
    });
};

module.exports.getProductsPage = (request, response) =>
{
    response.render(path.join('pages', 'shop', 'products'), {
        products: Product.getAll(),
        view: {
            title: "Products",
            route: "/products"
        },
    });
};

module.exports.getProductPage = (request, response) =>
{
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

module.exports.getCartPage = (request, response) =>
{
    const cartList = [];
    Cart.getQuantities().forEach(
        cartItem => cartList.push({
                product: Product.findById(cartItem[0]),
                quantity: cartItem[1]}));

    response.render(path.join('pages', 'shop', 'cart'), {
        total: Cart.getTotalAmount(),
        cartList: cartList,
        view: {
            title: "Your Cart",
            route: "/cart"
        },
    });
};

module.exports.postCart = (request, response) =>
{
    const product = Product.findById(request.body.productId);
    
    if(product != null){
        if(request.body.remove)
            Cart.removeItem(product.id.toString(), product.price);
        else
            Cart.addItem(product.id.toString(), product.price);
    }

    Cart.saveData();

    response.redirect("/cart");
};

module.exports.getOrdersPage = (request, response) =>
{
    response.render(path.join('pages', 'shop', 'orders'), {
        view: {
            title: "Your Orders",
            route: "/orders"
        },
    });
};