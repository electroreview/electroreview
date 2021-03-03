'use strict';

// Constructor function for all products
function ProductShow(name, price, memory, color, warranty, description, processor, size) {
    this.name = name;
    this.price = price;
    this.memory = memory;
    this.color = color;
    this.warranty = warranty;
    this.description = description;
    this.processor = processor;
    this.size = size;
}

// private function to constructor function
ProductShow.prototype.render = function () {
    const container = document.getElementById('container');
    const articleEl = document.createElement('article');
    // container.appendChild(articleEl);

    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;

    const pEl = document.createElement('p');
    articleEl.appendChild(pEl);

    const tableEl = document.createElement('table');
    articleEl.appendChild(tableEl);

    const headerRowEl = document.createElement('tr');
    tableEl.appendChild(headerRowEl);

    const th1El = document.createElement('th');
    headerRowEl.appendChild(th1El);
    th1El.textContent = 'Price';

    const th2El = document.createElement('th');
    headerRowEl.appendChild(th2El);
    th2El.textContent = 'Memory';

    const th3El = document.createElement('th');
    headerRowEl.appendChild(th3El);
    th3El.textContent = 'Color';

    const th4el = document.createElement('th');
    headerRowEl.appendChild(th4el);
    th4el.textContent = 'Warranty';

    const th5el = document.createElement('th');
    headerRowEl.appendChild(th5el);
    th5el.textContent = 'Description';

    const th6el = document.createElement('th');
    headerRowEl.appendChild(th6el);
    th6el.textContent = 'Processor';

    const th7el = document.createElement('th');
    headerRowEl.appendChild(th7el);
    th7el.textContent = 'Size';

    const dataRowEl = document.createElement('tr');
    tableEl.appendChild(dataRowEl);

    const td1El = document.createElement('td');
    dataRowEl.appendChild(td1El);
    td1El.textContent = this.price;

    const td2El = document.createElement('td');
    dataRowEl.appendChild(td2El);
    td2El.textContent = this.memory;

    const td3El = document.createElement('td');
    dataRowEl.appendChild(td3El);
    td3El.textContent = this.color;

    const td4El = document.createElement('td');
    dataRowEl.appendChild(td4El);
    td4El.textContent = this.warranty;

    const td5El = document.createElement('td');
    dataRowEl.appendChild(td5El);
    td5El.textContent = this.description;

    const td6El = document.createElement('td');
    dataRowEl.appendChild(td6El);
    td6El.textContent = this.processor;

    const td7El = document.createElement('td');
    dataRowEl.appendChild(td7El);
    td7El.textContent = this.size;
};

// Fill data of each object product
const HpPavilion = new ProductShow(
    'Hp Pavilion',
    '1500 JOD',
    '16 GB RAM',
    'Silver',
    '1 Year',
    'Windows 10',
    'Core i7 up to 4.7GHz 12M Cash 4-Cores',
    '15.6" FHD IPS 250 nits Display'
);


const DelLatitude = new ProductShow(
    'Dell Latitude',
    '549 JOD',
    '8 GB RAM',
    'black',
    '1 Year',
    '2-in-1 Touch, Windows 10 Home',
    'Core i5 Laptop',
    '13.3" IPS Full HD Touch Screen Anti-Reflective'
);

const Lenovo = new ProductShow(
    'Lenovo YOGA',
    '870 JOD',
    '16 GB RAM',
    'orchid',
    '1 Year',
    '10Gen Aluminium Windows 10 Home',
    'Core i7 Laptop',
    '14-inch FHD IPS touch or 4K HDR glass'
);

const googlePixil = new ProductShow(
    'Google pixel 5',
    '699 JOD',
    '15 GB RAM',
    'Black',
    '1 Year',
    'Announced 2020, September 30',
    'Qualcomm SM7250 Snapdragon 765G',
    '6.0" Flexible OLED, 1080 x 2340 px resolution'
);

const Huawei = new ProductShow(
    'Huawei p40',
    '480 JOD',
    '4 GB RAM',
    'Silver ',
    '2 Year',
    'Announced 2021, February 26',
    'Kirin 990 (7 nm+)',
    '6.1 inches 1080 x 2340 pixels'
);

const AppleIphone = new ProductShow(
    'Apple iPhone Max',
    '500 JOD',
    '16 GB RAM',
    'Silver',
    '2 Year',
    'Announced 2020, October 13',
    'Type Super Retina XDR OLED, HDR10, 800 nits',
    '6.7 inches 1284 x 2778 pixels'
);

const HuaweiMediaPad = new ProductShow(
    'Huawei Pad',
    '190 JOD',
    '32 GB RAM',
    'Black',
    '2 Year',
    'Model No:C17381',
    'Kirin 659 Processor Octa-core 2.36 GHz',
    '10.1 Full HD 1920 x 1200p'
);

const iPadOS = new ProductShow(
    'iPadOS 14',
    '1240 JOD',
    '128 GB RAM',
    'Silver',
    '1 Year',
    'Model No:A1709',
    'ios 14 up to 4.7GHz 12M',
    '12.9" FHD IPS 250 nits Display'
);

const GalaxyTab = new ProductShow(
    'Galaxy Tab',
    '99 JOD',
    '32 GB RAM',
    'Silver',
    '1 Year',
    'Model No:8.0 2019',
    'Quad-core, 2.0 GHz',
    '8.0 inches, TFT capacitive touchscreen'
);

//Render all products
GalaxyTab.render();
iPadOS.render();
HuaweiMediaPad.render();
AppleIphone.render();
Huawei.render();
googlePixil.render();
DelLatitude.render();
HpPavilion.render();
Lenovo.render();
