'use strict';

const imgsName = ['hp-1.jpg', 'hp-2.jpg', 'hp-3.jpg'];

const DeviceSpic = function (productName, modelNumber, price, decsription, color, additionalInfo, warranty, processor, ram, screen, storeg) {
    this.productName = productName;
    this.modelNumber = modelNumber;
    this.price = price;
    this.decsription = decsription;
    this.color = color;
    this.additionalInfo = additionalInfo;
    this.warranty = warranty;
    this.processor = processor;
    this.ram = ram;
    this.screen = screen;
    this.storage = storeg;
    // this.imgPath = `../images/laptop/HpLaptop/${imgsName}`;
    DeviceSpic.all.push(this);
};

DeviceSpic.all = [];

const hp = new DeviceSpic(
    'HP Pavilion',//product Name
    '15-eg0002ne 11Gen',//Model Number
    '1500 JOD',// Price
    'Camera Wireless',//description
    'Silver',//color
    'Bluetooth, Windows 10 Home',//additionalInfo
    '1 Year',//warranty
    'Core i7 up to 4.7GHz 12M Cash 4-Cores',//processor
    '16 GB RAM DDR4',//ram
    '15.6 FHD IPS 250 nits Display',//screen
    '1TB PCIe® NVMe™ M.2 SSD'//storeg
);

const dell = new DeviceSpic(
    'Dell Latitude',//product Name
    '5300 Business',//Model Number
    '549 JOD',// Price
    'Core i5 Laptop 2-in-1 Touch, Windows 10 Home',//description
    'Black',//color
    'Bluetooth, Windows 10 Home',//additionalInfo
    '1 Year',//warranty
    'Core i5 Laptop',//processor
    '8 GB RAM DDR4',//ram
    '13.3" IPS Full HD Touch Screen Anti-Reflective',//screen
    '256 GB PCIe® NVMe™ M.2 SSD'//storeg
);
const lenovo = new DeviceSpic(
    'Orchid Lenovo YOGA Slim 7 NEW 10Gen',//product Name
    '82A3005RUK ',//Model Number
    '870 JOD',// Price
    'Core i7 10Gen Aluminium Windows 10 Home',//description
    'Orchid',//color
    'FHD IPS 300nits ,Wireless , Blutooth',//additionalInfo
    '1 Year',//warranty
    'Core i7 Laptop',//processor
    '16 GB RAM DDR4',//ram
    '14 - inch FHD IPS touch or 4K HDR glass',//screen
    '512GB SSD M.2 NVMe , 14up to 1 TB PCIe x4 '//storeg
);

for (let i = 0; i < 3; i++) {
    DeviceSpic.all.push(this);
}
// slider -----------------------------------------------------------------
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName('mySlides').src = `../images/laptop/HpLaptop/${imgsName[slideIndex]}`;
//     // var dots = document.getElementsByClassName('dot');
//     if (n > slides.length) { slideIndex = 1; }
//     if (n < 1) { slideIndex = slides.length; }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = 'none';
// }
// for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(' active', '');
// }
// slides[slideIndex - 1].style.display = 'block';
// dots[slideIndex - 1].className += ' active';
// }

//END of Slider --------------------------------------------------------


let itemName = localStorage.getItem('itemName');
function getData(name) {
    itemName = name;
    localStorage.setItem('itemName', itemName);
    window.location.href = 'test.html';
}

function renderSpic() {
    for (let i = 0; i < imgsName.length; i++) {
        document.getElementsByClassName('mySlides').src = imgsName[i];
    }
    // Div 1 With Class Model
    const div1 = document.getElementById('item_info');
    const h4El = document.createElement('h4');
    div1.appendChild(h4El);
    h4El.innerHTML = `Produc Name: ${hp.productName}`;

    const h6El = document.createElement('h6');
    div1.appendChild(h6El);
    h6El.textContent = `Model No. ${hp.modelNumber}`;
    const h5El = document.createElement('h5');
    div1.appendChild(h5El);
    h5El.textContent = `Price: ${hp.price}`;

    //Div 2 with Class Model2;
    const div2 = document.getElementById('decription');
    const h4ElModel2 = document.createElement('h4');
    div2.appendChild(h4ElModel2);
    h4ElModel2.textContent = 'Decsription';
    const pEl = document.createElement('p');
    div2.appendChild(pEl);
    pEl.textContent = `${hp.decsription}`;

    //Create the table
    const tableEl = document.getElementById('tableSection');
    const thEl = document.createElement('th');
    tableEl.appendChild(thEl);
    thEl.textContent = 'Specification';
    const thElPro = document.createElement('th');
    tableEl.appendChild(thElPro);
    thElPro.textContent = 'Property';
    //Color
    const trElColor = document.createElement('tr');
    tableEl.appendChild(trElColor);
    const tdElColortitle = document.createElement('td');
    trElColor.appendChild(tdElColortitle);
    tdElColortitle.textContent = 'Color';
    const tdElColor = document.createElement('td');
    trElColor.appendChild(tdElColor);
    tdElColor.textContent = `${hp.color}`;

    //Additional Info
    const trElAdd = document.createElement('tr');
    tableEl.appendChild(trElAdd);
    const tdElAddtitle = document.createElement('td');
    trElAdd.appendChild(tdElAddtitle);
    tdElAddtitle.textContent = 'Additional Info';
    const tdElAdd = document.createElement('td');
    trElAdd.appendChild(tdElAdd);
    tdElAdd.textContent = `${hp.additionalInfo}`;

    //Warranty
    const trElWarranty = document.createElement('tr');
    tableEl.appendChild(trElWarranty);
    const tdElWarrantytitle = document.createElement('td');
    trElWarranty.appendChild(tdElWarrantytitle);
    tdElWarrantytitle.textContent = 'Warranty';
    const tdElWarranty = document.createElement('td');
    trElWarranty.appendChild(tdElWarranty);
    tdElWarranty.textContent = `${hp.warranty}`;

    //Processor
    const trElProcessor = document.createElement('tr');
    tableEl.appendChild(trElProcessor);
    const tdElProcessortitle = document.createElement('td');
    trElProcessor.appendChild(tdElProcessortitle);
    tdElProcessortitle.textContent = 'Processor';
    const tdElProcessor = document.createElement('td');
    trElProcessor.appendChild(tdElProcessor);
    tdElProcessor.textContent = `${hp.processor}`;

    //RAM
    const trElRAM = document.createElement('tr');
    tableEl.appendChild(trElRAM);
    const tdElRAMtitle = document.createElement('td');
    trElRAM.appendChild(tdElRAMtitle);
    tdElRAMtitle.textContent = 'Memory RAM';
    const tdElRAM = document.createElement('td');
    trElRAM.appendChild(tdElRAM);
    tdElRAM.textContent = `${hp.ram}`;

    //Screen
    const trElScreen = document.createElement('tr');
    tableEl.appendChild(trElScreen);
    const tdElScreentitle = document.createElement('td');
    trElScreen.appendChild(tdElScreentitle);
    tdElScreentitle.textContent = 'Screen Size (Inch)';
    const tdElScreen = document.createElement('td');
    trElScreen.appendChild(tdElScreen);
    tdElScreen.textContent = `${hp.screen}`;

    //Storage
    const trElStorage = document.createElement('tr');
    tableEl.appendChild(trElStorage);
    const tdElStoragetitle = document.createElement('td');
    trElStorage.appendChild(tdElStoragetitle);
    tdElStoragetitle.textContent = 'Storage)';
    const tdElStorage = document.createElement('td');
    trElStorage.appendChild(tdElStorage);
    tdElStorage.textContent = `${hp.storage}`;






}
