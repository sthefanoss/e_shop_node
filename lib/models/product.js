//imports
const jsonFileIo = require('../helpers/json-file-io');

//state
const products = jsonFileIo.readJSONsfromFile('products');

//exports
module.exports = class Product {
    constructor(title, price, description, imageUrl) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
        this.id = Date.now();
    }

   static fromRequestBody(requestBody) {
       return new Product(
        requestBody.title,
        requestBody.price,
        requestBody.description,
        requestBody.imageUrl,
        );
   }

    save() {
        products.push(this);
        jsonFileIo.writeJSONsInFile('products', products);
    }

    delete() {
        products = products.filter((product) => product.id != this.id);
        jsonFileIo.writeJSONsInFile('products', products);
    }

    static findById(id){
        products.array.forEach(
            product => {
                if(product.id === id) return product;
            }
        );

        return null;
    }

    static getAll() {
        return [...products];
    }

    static getCount() {
        return products.length;
    }
};