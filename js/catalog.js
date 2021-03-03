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

const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);


let reviewArr={};

// onClick
function updateReview() {

    let c1 = document.getElementById('textReview').value;
    let e1 = document.getElementById('name').value;

    reviewArr = JSON.parse(localStorage.getItem('comments')) || {};
    reviewArr[e1] = c1;
    saveLocal();
    renderComments();

}
populateForm();

function saveLocal(){
    localStorage.setItem('comments',JSON.stringify(reviewArr));
}

let commentDiv = document.getElementById('commentDiv');
let ulEl = document.createElement('ul');
commentDiv.appendChild(ulEl);
function renderComments () {
    let reviewArrData = JSON.parse(localStorage.getItem('comments'));
    console.log(reviewArrData);

    while (ulEl.firstChild) {
        ulEl.removeChild(ulEl.firstChild);
    }


    let i;
    for( i in reviewArrData) {
        let liEl = document.createElement('li');
        liEl.className = 'liClass';
        ulEl.appendChild(liEl);
        console.log(reviewArrData);
        liEl.textContent = `${i}:${reviewArrData[i]}`;
    }
}
renderComments();


