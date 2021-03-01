'use strict';

let mainEl = document.getElementsByTagName('main')[0];
let sectionEl = document.createElement('section');
mainEl.appendChild(sectionEl);

const cart = new Cart([]);

function populateForm() {
    const selectElement = document.getElementById('items');
    for (let i in Product.allProducts) {
        let optionEl = document.createElement('option');
        selectElement.appendChild(optionEl);
        optionEl.textContent = Product.allProducts[i].name;
        optionEl.value = Product.allProducts[i].name;
    }
}

function handleSubmit(event) {
    event.preventDefault();
    addSelectedItemToCart();
    cart.saveToLocalStorage();
    updateCounter();
    // updateCartPreview();
    confirmMsg();
}

function confirmMsg() {
    sectionEl.id = 'message';
    sectionEl.textContent = 'Added to Cart!';
}

function addSelectedItemToCart() {
    let selectElementItem = document.getElementById('items');
    let selectIndexItem = selectElementItem.selectedIndex;
    let product = selectElementItem.options[selectIndexItem].value;
    let quantity = document.getElementById('quantity').value;
    cart.addItem(product, quantity);
}

function updateCounter() {
    let updateEl = document.getElementById('itemCount');
    updateEl.textContent = cart.items.length;
}

// function updateCartPreview() {
//   let divEl = document.getElementById('cartContents');
//   let articleEl = document.createElement('article');
//   divEl.appendChild(articleEl);
//   articleEl.textContent = `The Product: ${cart.items[[cart.items.length - 1]].product}, The Quantity: ${cart.items[[cart.items.length - 1]].quantity}`;
// }





// function updateReview() {
//     let userName = document.getElementById('name').value;
//     let article1El = document.getElementById('userName');
//     article1El.innerHTML = userName;
//     let divEl = document.getElementById('textReview').value;
//     let articleEl = document.getElementById('divEl');
//     articleEl.innerHTML = divEl;
// }


// updateReview();


function updateReview() {
    let c1 = document.getElementById('textReview').value;
    let d1 = document.getElementById('as');
    let e1 = document.getElementById('name').value;
    let f1 = document.getElementById('na');
    d1.innerHTML = c1;
    f1.innerHTML = e1;
}
updateReview();
populateForm();