const dropList = document.querySelector('.dropdown__list');
const dropValue = document.querySelector('.dropdown__value');
const dropItem = Array.from(document.getElementsByClassName('dropdown__item'));

function dropClick() {
    if (dropList.classList.contains('dropdown__list_active')) {
        dropList.classList.remove('dropdown__list_active');
    } else {
        dropList.classList.add('dropdown__list_active');
    }
}

function itemClick(event) {
    event.preventDefault()
    dropClick();
    dropValue.textContent = this.textContent;
}

dropValue.addEventListener('click', dropClick);
dropItem.forEach(item => item.addEventListener('click', itemClick));


