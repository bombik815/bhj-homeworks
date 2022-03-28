const subscribeModal = document.querySelector('#subscribe-modal');
const modalClose = document.querySelector('.modal__close');

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find(e => e.startsWith(name + '='));
    return cookie ? decodeURIComponent(cookie.substr((name + '=').length)) : null;
}

function saveStatus() {
    setCookie('status', 'true')
    subscribeModal.classList.remove('modal_active');
};

function getStatus() {
    const status = getCookie('status');
    if (status === 'true') {
        return subscribeModal.classList.remove('modal_active');
    } else {
        return subscribeModal.classList.add('modal_active');
    };
};

getStatus();

modalClose.addEventListener('click', saveStatus);
