//state
const products = [];

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
        let newProduct = request.body;
        newProduct.imageUrl = `http://api.adorable.io/avatars/${products.length}`;
        newProduct.price = 19.99;
        newProduct.description = "Some description";
        products.push(newProduct);
        console.log(products);

        response.redirect('/admin/add-product');
    };

module.exports.products = products;