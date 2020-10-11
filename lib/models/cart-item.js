module.exports = class CartItem{
    constructor(id, price, quantity) {
        this.id = id;
        this.price = price;
        this.quantity = quantity || 1;
    }
};