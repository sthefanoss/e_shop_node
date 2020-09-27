const { request } = require('express');
//imports
const jsonFileIo = require('../helpers/json-file-io');

//state
var products = jsonFileIo.readJSONsfromFile('products') ?? [];

//exports
module.exports = class Product {
    constructor(title, price, description, imageUrl, id) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
        this.id = id ?? Date.now();
    }

   static fromRequestBody(requestBody) {
       return new Product(
        requestBody.title,
        requestBody.price,
        requestBody.description,
        requestBody.imageUrl,
        requestBody.id,
        );
   }

    static add(product) {
        products.push(product);
    }

    static delete(id) {
        products = products.filter(product => product.id != id);
    }

    static update(product){
        const index = products.findIndex(product_ => product_.id == product.id);
        if(index==-1)
            throw "Invalid product id.";

        products[index] = product;
    }

    static findById(id) {
       return products.find(product => id == product.id);
    }

    static getAll() {
        return [...products];
    }

    static getCount() {
        return products.length;
    }

    static saveData() {
        jsonFileIo.writeJSONsInFile('products', products);
     };

    static getIds() {
        return products.map(product => product.id);
    }
};