'use strict';

// Cart Constructor
const Cart = function (items) {
    this.items=items;
};

// Create new CartItem and add it to this.item
Cart.prototype.addItem = function (product, quantity) {
    this.items.push(new CartItem(product, quantity));
};

// Save the contents of the carts to localStorage
Cart.prototype.SaveToLocalStorage = function (){
    localStorage.setItem('cart', JSON.stringify(this.item));
};

// Remove one item from the cart
Cart.prototype.removeItem = function (item){
    const index = this.items.indexOf(item);
    this.items.splice(index,1);
};

// Passing Parameters
let CartItem = function (product, quantity){
    this.product = product;
    this.quantity = quantity;
};

// Product Constructor
const Product = function (filePath, name){
    this.filePath = filePath;
    this.name = name;
    Product.allProducts.push(this);
};

Product.allProducts = [];

// The Catalog
function generateCatalog() {
    new Product('images/laptop/DellLaptop/dell-1.jpg','Dell');
    new Product('images/laptop/HpLaptop/hp-1.jpg','hp');
    new Product('images/laptop/LenovoLaptop/lenovo-1.jpg','lenovo');
    new Product('images/phones/ApplePhone/iphone-1.jpg','iphone');
    new Product('images/phones/GooglePixel/google-pixel-1.jpg','google');
    new Product('images/phones/HuaweiPhone/huawei-1.jpg','huawei');
    new Product('images/tablet/AppleTablet/apple-tablet-1.jpg','apple-tablet');
    new Product('images/tablet/HuaweiTablet/huawei-tablet-1.jpg','huawei-tablet');
    new Product('images/tablet/SamsungTablet/galaxy-tablet-1.jpg','galaxy-tablet');
}

generateCatalog();
