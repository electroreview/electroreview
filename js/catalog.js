'use strict';

let mainEl = document.getElementsByTagName('main')[0];
let sectionEl = document.createElement('section');
mainEl.appendChild(sectionEl);

// Set up an empty cart for use on this page.
const cart = new Cart([]);
//load to dropdown
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
  updateCartPreview();
  confirmMsg();
}

function confirmMsg() {
  sectionEl.id = 'message';
  sectionEl.textContent = 'Added to Cart!';
}

//Adding the selected item and quantity to the cart
function addSelectedItemToCart() {
  let selectElementItem = document.getElementById('items');
  let selectIndexItem = selectElementItem.selectedIndex;
  let product = selectElementItem.options[selectIndexItem].value;
  let quantity = document.getElementById('quantity').value;
  cart.addItem(product, quantity);
}

//Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  let updateEl = document.getElementById('itemCount');
  updateEl.textContent = cart.items.length;
}

//Show item & quantity in the cart preview div
function updateCartPreview() {
  let divEl = document.getElementById('cartContents');
  let articleEl = document.createElement('article');
  divEl.appendChild(articleEl);
  articleEl.textContent = `The Product: ${cart.items[[cart.items.length - 1]].product}, The Quantity: ${cart.items[[cart.items.length - 1]].quantity}`;
}

const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

populateForm();