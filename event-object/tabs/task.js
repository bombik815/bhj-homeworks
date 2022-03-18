const arrayTab = Array.from(document.getElementsByClassName('tab'));
const arrayContent = Array.from(document.getElementsByClassName('tab__content'));

function clickTab() {
    for (let element of arrayTab) {
        if (element.classList.contains('tab_active')) {
            element.classList.remove('tab_active');
            arrayContent[arrayTab.indexOf(element)].classList.remove('tab__content_active');
        }
    }
    this.classList.add('tab_active');
    arrayContent[arrayTab.indexOf(this)].classList.add('tab__content_active');
}

arrayTab.forEach((event) => {event.addEventListener('click', clickTab);});
