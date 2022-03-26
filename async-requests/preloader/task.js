let xhr = new XMLHttpRequest();
let excRates = {};
let item = document.querySelector('.item');
const imgLoader = document.querySelector('#loader');
const items = document.querySelector('#items');
let itemCode = document.querySelectorAll('.item__code');
let itemValue = document.querySelectorAll('.item__value');
let itemCurrency = document.querySelectorAll('.item__currency');

function getExcRates() {
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send();

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            let obj = JSON.parse(xhr.responseText);
            excRates = obj.response.Valute;
            localStorage.clear();
            getValueRates();
            saveValute();
        };
    });
};

function insertElement() {
    let arrayClone = [];
    for (let i = 0; i < 3; i++) {
        arrayClone.push(`<div class="item">
            <div class="item__code"></div>
            <div class="item__value"></div>
            <div class="item__currency"></div>
        </div>`);
    }
    items.insertAdjacentHTML('afterbegin', arrayClone.join(''));
    getExcRates();
};

function getValueRates() {
    itemCode = document.querySelectorAll('.item__code');
    itemValue = document.querySelectorAll('.item__value');
    itemCurrency = document.querySelectorAll('.item__currency');

    itemCode[0].textContent = excRates.USD.CharCode;
    itemValue[0].textContent = excRates.USD.Value;
    itemCurrency[0].textContent = 'руб.';
    itemCode[1].textContent = excRates.EUR.CharCode;
    itemValue[1].textContent = excRates.EUR.Value;
    itemCurrency[1].textContent = 'руб.';
    itemCode[2].textContent = excRates.GBP.CharCode;
    itemValue[2].textContent = excRates.GBP.Value;
    itemCurrency[2].textContent = 'руб.';
    imgLoader.classList.remove('loader_active');
};

function saveValute() {
    let item = document.getElementsByClassName('item');
    itemCode = document.querySelectorAll('.item__code');
    itemValue = document.querySelectorAll('.item__value');
    itemCurrency = document.querySelectorAll('.item__currency');
    let usd = {};
    let eur = {};
    let gbp = {};
    for (let i = 0; i < item.length; i++) {
        if (item[i].querySelector('.item__code').textContent === 'USD') {

            usd.code = itemCode[i].textContent;
            usd.value = itemValue[i].textContent;
            usd.currency = 'руб.';
        } else if (item[i].querySelector('.item__code').textContent === 'EUR') {
            eur.code = itemCode[i].textContent;
            eur.value = itemValue[i].textContent;
            eur.currency = 'руб.';
        } else if (item[i].querySelector('.item__code').textContent === 'GBP') {
            gbp.code = itemCode[i].textContent;
            gbp.value = itemValue[i].textContent;
            gbp.currency = 'руб.';
        };
    };
    localStorage.usd = JSON.stringify(usd);
    localStorage.eur = JSON.stringify(eur);
    localStorage.gbp = JSON.stringify(gbp);
};

function getValute() {
    let usd;
    let eur;
    let gbp;
    let arrayValute;
    if (localStorage.length !== 0) {
        usd = JSON.parse(localStorage.usd);
        eur = JSON.parse(localStorage.eur);
        gbp = JSON.parse(localStorage.gbp);
        arrayValute = [];
    } else {
        return insertElement();
    };
    if (Object.keys(usd).length !== 0) {
        arrayValute.push(`<div class="item">
        <div class="item__code">${usd.code}</div>
        <div class="item__value">${usd.value}</div>
        <div class="item__currency">руб.</div>
    </div>`);
    };
    if (Object.keys(eur).length !== 0) {
        arrayValute.push(`<div class="item">
        <div class="item__code">${eur.code}</div>
        <div class="item__value">${eur.value}</div>
        <div class="item__currency">руб.</div>
    </div>`);
    };
    if (Object.keys(gbp).length !== 0) {
        arrayValute.push(`<div class="item">
        <div class="item__code">${gbp.code}</div>
        <div class="item__value">${gbp.value}</div>
        <div class="item__currency">руб.</div>
    </div>`);
    };
    getExcRates();
    return items.insertAdjacentHTML('afterbegin', arrayValute.join(''));
};

getValute();
