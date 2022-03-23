const product = document.getElementsByClassName('product');
const productImg = document.getElementsByClassName('product__image');
const productQuantity = document.getElementsByClassName('product__quantity-value');
const productAdd = document.getElementsByClassName('product__add');
const cartProducts = document.querySelector('.cart__products')
const productQuantityControl = document.getElementsByClassName('product__quantity-controls');
const controlDec = document.getElementsByClassName('product__quantity-control_dec');
const controlInc = document.getElementsByClassName('product__quantity-control_inc');
const cart = document.querySelector('.cart');
let beginLeft;
let beginTop;
let endLeft;
let endTop;
let stepLeft;
let stepTop;
let timerId;
let img;
cart.style = 'display: none';
getBascet();
removeCart();


function displayBascet() {
    if (document.getElementsByClassName('cart__product').length === 0) {
        cart.style = 'display: none';
    };
};

function removeCart() {
    for (let elem of document.getElementsByClassName('cart__product')) {
        elem.addEventListener('click', () => {
            elem.remove();
            displayBascet();
            saveBascet();
        });
    };
};

function removeImg() {;
    if (document.querySelector('#img')) {
        return document.querySelector('#img').remove();
    };
};

function animationImg(arg) {
    removeImg();
    let cloneImg = `<img class="cart__product-image" id="img" src="${productImg[arg].src}">`;
    beginLeft = productImg[arg].offsetLeft;
    beginTop = productImg[arg].offsetTop;
    for (let elem of document.getElementsByClassName('cart__product')) {
        if (elem.dataset.id === product[arg].dataset.id) {
            endLeft = elem.querySelector('.cart__product-image').getBoundingClientRect().left;
            endTop = elem.querySelector('.cart__product-image').getBoundingClientRect().top;
        };
    };
    stepLeft = (endLeft - beginLeft) / 10;
    stepTop = (beginTop - endTop) / 10;
    cart.insertAdjacentHTML("beforebegin", cloneImg);
    document.querySelector('body').style = 'position: relative';
    img = document.querySelector('#img');
    img.style = 'position: absolute';
    img.style.left = `${beginLeft}px`;
    img.style.top = `${beginTop}px`;
    return timerAnimation();
};

function step() {
    beginLeft = img.offsetLeft;
    beginTop = img.offsetTop;
    if (beginLeft < endLeft && beginTop > endTop) {
        img.style.left = `${beginLeft + stepLeft}px`;
        img.style.top = `${beginTop - stepTop}px`;
    } else {
        img.remove();
        stopTimer();
    };
};

function timerAnimation() {
    return timerId = setInterval(step, 60);
};

function stopTimer() {
    return clearInterval(timerId);
};

function saveBascet() {
    let arrayIds = document.getElementsByClassName('cart__product');
    let arrayCart = [];

    for (let i = 0; i < arrayIds.length; i++) {
        arrayCart.push({
            id: arrayIds[i].dataset.id,
            img: arrayIds[i].querySelector('.cart__product-image').src,
            count: arrayIds[i].querySelector('.cart__product-count').textContent
        });
    };

    localStorage.cart = JSON.stringify(arrayCart);
};

function getBascet() {
    let arrayBascet;
    let arrayStorage;

    if (localStorage.cart) {
        arrayStorage = JSON.parse(localStorage.cart);
        arrayBascet = [];
    } else {
        return;
    };

    for (let i = 0; i < arrayStorage.length; i++) {
        arrayBascet.push(`<div class="cart__product" data-id="${arrayStorage[i].id}">
    <img class="cart__product-image" src="${arrayStorage[i].img}">
    <div class="cart__product-count">${arrayStorage[i].count}</div>
</div>`);
    };
    cart.style = 'display: block';
    cartProducts.insertAdjacentHTML('afterbegin', arrayBascet.join(''));
};


for (let i = 0; i < productAdd.length; i++) {

    productAdd[i].addEventListener('click', () => {
        let dataId = product[i].dataset.id;
        let trueOrFalse = false;
        animationImg(i);
        for (let elem of document.querySelectorAll('.cart__product')) {
            if (elem.dataset.id === dataId) {
                trueOrFalse = true;
            };
        };

        if (!trueOrFalse && (+productQuantity[i].textContent) > 0) {
            const html = `<div class="cart__product" data-id="${product[i].dataset.id}">
    <img class="cart__product-image" src="${productImg[i].src}">
    <div class="cart__product-count">${productQuantity[i].textContent}</div>
    </div>`;
            cartProducts.insertAdjacentHTML('afterbegin', html);
            cart.style = 'display: block';
            removeCart();
        } else {
            for (let elem of document.getElementsByClassName('cart__product')) {
                if (elem.dataset.id === dataId) {
                    let number = elem.querySelector('.cart__product-count').textContent;
                    elem.querySelector('.cart__product-count').textContent = (+number) + (+productQuantity[i].textContent);
                };
            };
        };
        saveBascet();
    });
};

for (let i = 0; i < productQuantityControl.length; i++) {

    controlDec[i].addEventListener('click', () => {
        if (+controlDec[i].parentElement.querySelector('.product__quantity-value').textContent > 1) {
            controlDec[i].parentElement.querySelector('.product__quantity-value').textContent -= 1;
        };
    });

    controlInc[i].addEventListener('click', () => {
        if (+controlInc[i].parentElement.querySelector('.product__quantity-value').textContent > 0) {
            ++controlInc[i].parentElement.querySelector('.product__quantity-value').textContent;
        };
    });

};
