//instances
const list = [];

//exports
module.exports = class Product {
    constructor(title, price, description, imageUrl) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    save() {
        list.push(this);
    }

    static getAll() {
        return [...list];
    }

    static getCount() {
        return list.length;
    }
};