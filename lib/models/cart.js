//imports
const jsonFileIo = require('../helpers/json-file-io');

//state
let [Items, total] = jsonFileIo.readJSONsfromFile('cart') ?? [[], 0];

//helpers
const findById = id => {
    return Items.findIndex((entry) => id == entry[0]);
};

const addItemToCache = id => {
    const index = findById(id);

    if(index === -1)
        Items.push([id, 1]);
    else
        Items[index][1]++;
};

const removeItemFromCache = id => {
    const index = findById(id);

    if(Items[index][1] === 1)
        Items = Items.filter(cartItem => cartItem[0] !== id);
    else
        Items[index][1]--;
};

//exports
module.exports = class Cart{
    static getTotalAmount = () =>  total;
    static getQuantities = () => [...Items];

    static addItem = (id, price) =>
    { 
        addItemToCache(id);
        total += Number(price);
    };

    static removeItem = (id, price) =>
    {
        removeItemFromCache(id);
        total -= Number(price);
    };

    static saveData() 
    {
        jsonFileIo.writeJSONsInFile('cart', [Items, total]);
    };
};