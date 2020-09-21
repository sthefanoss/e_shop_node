//imports
const jsonFileIo = require('../helpers/json-file-io');

//state
let cart = jsonFileIo.readJSONsfromFile('cart') ?? [[], 0];
const products = 0;
const total = 1;

//exports
module.exports = class Cart{
    static getTotalAmount = () =>  cart[total];
    static getQuantities = () => [...cart[products]];

    static findIndexById = (id, map) => {
        for(var index = 0; index < map.length; index++){
            if(map[index][0] === id)
                return index;
        }
        return -1;
    }

    static addProduct = (id, price) => {
        var entryIndex = this.findIndexById(id, cart[products]);

        if(entryIndex === -1)
            cart[products].push([id, 1]);
        else
            cart[products][entryIndex][1]++;

        cart[total] += Number(price);

        jsonFileIo.writeJSONsInFile('cart', cart);
    }

    static removeProduct = (id, price) => {
        var entryIndex = this.findIndexById(id, cart[products]);

        if(cart[products][entryIndex][1] === 1)
            cart[products] = cart[products].filter(cartItem => cartItem[0] !== id);
        else
            cart[products][entryIndex][1]--;

        cart[total] -= Number(price);

        jsonFileIo.writeJSONsInFile('cart', cart);
    }
};