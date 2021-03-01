'use strict';

const Cart = function (items) {
    this.items = items;
};

Cart.prototype.addItem = function (product, quantity) {
    this.items.push(new CartItem(product, quantity));
};

Cart.prototype.saveToLocalStorage = function () {
    localStorage.setItem('cart', JSON.stringify(this.items));
};

Cart.prototype.removeItem = function (item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
};

let CartItem = function (product, quantity) {
    this.product = product;
    this.quantity = quantity;
};

const Product = function (filePath, name) {
    this.filePath = filePath;
    this.name = name;
    Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
    new Product('assets/laptop/DellLaptop/dell-1.jpg', 'dell laptop');
    new Product('assets/laptop/HpLaptop/hp-1.jpg', 'hp laptop');
    new Product('assets/laptop/LenovoLaptop/lenovo-1.jpg', 'lenovo laptop');
    new Product('assets/phones/ApplePhone/iphone-1.jpg', 'iphone mobile');
    new Product('assets/phones/GooglePixel/google-pixel-1.jpg', 'google pixel mobile');
    new Product('assets/phones/HuaweiPhone/huawei-1.jpg', 'huawei mobile');
    new Product('assets/tablet/AppleTablet/apple-tablet-1.jpg', 'apple tablet');
    new Product('assets/tablet/HuaweiTablet/huawei-tablet-1.jpg', 'huawei tablet');
    new Product('assets/tablet/SamsungTablet/galaxy-tablet-1.jpg', 'samsung tablet');
}

generateCatalog();
