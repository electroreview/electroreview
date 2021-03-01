'use strict';
//create event listener
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;
//create a function to load cart
function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cart = new Cart(cartItems);
}
//create a function to remove item from cart
function removeItemFromCart(event) {

    let removeArr = document.getElementsByTagName('a');

    for (let i = 0; i < removeArr.length; i++) {
        if (event.target.id === `remove${i}`) {
            cart.removeItem(cart.items[i]);
            break;
        }
    }
    // to save in local storage
    cart.saveToLocalStorage();
    renderCart();
}
// create function to clear cart
function clearCart() {
    let tbEl = document.getElementsByTagName('tbody')[0];
    tbEl.textContent = '';
}
// create function to show item in cart
function showCart() {
    let tbEl = document.getElementsByTagName('tbody')[0];

    for (let i = 0; i < cart.items.length; i++) {

        let trEl = document.createElement('tr');
        tbEl.appenchild(trEl);

        let tdDelete = document.createElement('td');
        let tdElItem = document.createElement('td');
        trEl.appendChild(tdDelete);

        let tdQuantity = document.createElement('td');
        let tdimage = document.createElement('td');
        trEl.appendChild(tdQuantity);

        tdDelete.innerHTML = `<a id="remove${i}">X</a>`;
        tdElItem.textContent = cart.items[i].product;
        trEl.appendChild(tdElItem);

        tdQuantity.textContent = cart.items[i].quantity;
        let imgEl = document.createElement('img');
        imgEl.id = 'itemImg';
        tdimage.appendChild(imgEl);

        trEl.appendChild(tdimage);
        for (let j = 0; j < Product.allProducts.length; j++) {
            if (cart.items[i].product === Product.allProducts[j].name) {
                imgEl.src = `${Product.allProducts[j].filePath}`;
                break;
            }
        }
    }
}
// function to render all functions
function renderCart() {
    loadCart();
    clearCart();
    showCart();
}

renderCart();
