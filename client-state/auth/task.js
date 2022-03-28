const signin = document.querySelector('#signin');
const signinForm = document.querySelector('#signin__form');
const signoutBtn = document.querySelector('#signout__btn');
const welcome = document.querySelector('#welcome');
const userId = document.querySelector('#user_id');
const login = document.querySelectorAll('.control')[0];
const password = document.querySelectorAll('.control')[1];

signinForm.action = '';

authorization();

function verification(e) {
    if (login.value === '' || password.value === '') {
        alert('Неверный логин/пароль');
        signinForm.reset();
    } else {
        let formData = new FormData(signinForm);
        let resData;
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
        xhr.addEventListener('load', () => {
            if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                resData = JSON.parse(xhr.responseText);
                saveUser(resData);
                getWelcome(resData);
            };
        });
        xhr.send(formData);
    };
    e.preventDefault();
};

function saveUser(arg) {
    if (arg.success === true) {
        localStorage.setItem('user', arg.user_id);
    };
};

function authorization() {
    if (localStorage.user) {
        getWelcome(localStorage.getItem('user'));
    } else {
        signin.classList.add('signin_active');
    };
};

function getWelcome(arg) {
    if (arg.success === true) {
        signin.classList.remove('signin_active');
        userId.textContent = arg.user_id;
        welcome.classList.add('welcome_active');
    } else {
        alert('Неверный логин/пароль');
        signinForm.reset();
    };
};

function signOut() {
    signinForm.reset();
    welcome.classList.remove('welcome_active');
    signin.classList.add('signin_active');
    localStorage.removeItem('user');
};

signinForm.addEventListener('submit', verification);

signoutBtn.addEventListener('click', signOut)
