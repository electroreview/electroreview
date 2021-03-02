// costructor function for all product

function Prouduct(name,price,memory,color,Warranty) {
this.name=name;
this.price=price;
this.memory=memory;
this.color=color;
this.Warranty=Warranty;
    }

// private function to constructor function
Prouduct.prototype.render=function () {
const container = document.getElementById('cotainer');
const articleEl = document.createElement('article');
container.appendChild(articleEl);

const h2El = document.createElement('h2');
articleEl.appendChild(h2El);
h2El.textContent = this.name;

 const pEl = document.createElement('p');
  articleEl.appendChild(pEl);
 

  const tableEl = document.createElement('table');
  articleEl.appendChild(tableEl);

  const headerRowEl = document.createElement('tr');
  tableEl.appendChild(headerRowEl);
// th table header td table data
  const th1El = document.createElement('th');
  headerRowEl.appendChild(th1El);
  th1El.textContent = 'price';

  const th2El = document.createElement('th');
  headerRowEl.appendChild(th2El);
  th2El.textContent = 'memory';

  const th3El = document.createElement('th');
  headerRowEl.appendChild(th3El);
  th3El.textContent = 'color';

  const th4el = document.createElement('th');
  headerRowEl.appendChild(th4el);
  th4el.textContent = 'warranty';

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
  td4El.textContent = this.Warranty;
    
}

//fill data the prototype for each object

const  HpPavilion = new Prouduct(
    'Hp Pavilion' ,
    '1500 JOD',
    '16 GB RAM',
    'Silver',
    '1 Year'
  );


  const  DelLatitude = new Prouduct(
    'Dell Latitude' ,
    '549 JOD',
    '8 GB RAM',
    'black',
    '1 Year',
  );

  const  Lenovo = new Prouduct(
    'Lenovo YOGA' ,
    '870 JOD',
    '16 GB RAM',
    'orchid',
    '1 Year',
  );
  const  googlePxil = new Prouduct(
    'google pixel 5' ,
    '699 JOD',
    '15 GB RAM',
    'black',
    '1 Year',
  );
  
  const  Hawawei = new Prouduct(
    'Hawawi p40' ,
    '480 JOD',
    '4 GB RAM',
    'silver ',
    '2 Year',
  );

  const AppleIphone = new Prouduct(
    'Apple iPhone max ' ,
    '500 JOD',
    '16 GB RAM',
    'silver ',
    '2 Year',
  );

  const HuaweiMediaPad = new Prouduct(
    ' Huawei Pad ' ,
    '190 JOD',
    '32 GB RAM',
    'black ',
    '2 Year',
  );

  
  
  const iPadOS  = new Prouduct(
    ' iPad OS ' ,
    '1240 JOD',
    '128 GB RAM',
    'silve ',
    '1 Year',
  );
  


  
  
  const GalaxyTab   = new Prouduct(
    '  Galaxy Tab ' ,
    ' 99 JOD',
    ' 32 GB RAM',
    'silve ',
    '1 Year',
  );

  GalaxyTab.render();
iPadOS.render();
  HuaweiMediaPad.render();
AppleIphone.render();
Hawawei.render();
 googlePxil.render();
  DelLatitude.render();
  HpPavilion.render();
  Lenovo.render();