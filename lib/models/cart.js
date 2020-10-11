const { request } = require('express');
//imports
const jsonFileIo = require('../helpers/json-file-io');
const CartItem = require('./cart-item');

//state
let items = jsonFileIo.readJSONsfromFile('cart') || [];

//helpers
const findById = id => {
    return items.findIndex((item) => id == item.id);
};

//exports
module.exports = class Cart{
    static getItems = () =>
    {
        return [... items];
    };

    static getTotal = () =>
    {
        var sum = 0;
        items.forEach((item) =>
            sum += item.quantity*item.price
        );

        return sum;
    };

    static addItem = (id, price) =>
    { 
        const index = findById(id);

        if(index === -1)
            items.push(new CartItem(id, price));
        else
            items[index].quantity++;
    };

    static removeItem = id =>
    {
        const index = findById(id);

        if(items[index].quantity === 1)
            items = items.filter(item => item.id != id);
        else
            items[index].quantity--;
    };

    static saveData() 
    {
        jsonFileIo.writeJSONsInFile('cart', items);
    };

    static onProductsUpdate(products) {
        items = items
            .filter((item) => products.map(product => product.id).includes(item.id))
            .map((item) => new CartItem(
                item.id,
                products.find((product) => item.id == product.id).price,
                item.quantity
            )
        );
    }
};