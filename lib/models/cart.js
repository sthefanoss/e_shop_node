//imports
const jsonFileIo = require('../helpers/json-file-io');

//state
let [products, total] = jsonFileIo.readJSONsfromFile('cart') ?? [[], 0];

//helpers
const findById = id => {
    return products.findIndex((entry) => id == entry[0]);
};

const updateStorage = () => {
    jsonFileIo.writeJSONsInFile('cart', [products, total]);
};

const addProductToCache = id => {
    const entryIndex = findById(id);

    if(entryIndex === -1)
        products.push([id, 1]);
    else
        products[entryIndex][1]++;
};

const removeProductFromCache = id => {
    const entryIndex = findById(id);

    if(products[entryIndex][1] === 1)
        products = products.filter(cartItem => cartItem[0] !== id);
    else
        products[entryIndex][1]--;
};

//exports
module.exports = class Cart{
    static getTotalAmount = () =>  total;
    static getQuantities = () => [...products];

    static addProduct = (id, price) => { 
        addProductToCache(id);
        total += Number(price);

        updateStorage();
    };

    static removeProduct = (id, price) => {
        removeProductFromCache(id);
        total -= Number(price);

        updateStorage();
    };
};