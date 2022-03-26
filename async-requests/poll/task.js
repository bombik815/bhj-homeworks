const pollTitle = document.getElementById('poll__title');
const pollAnswer = document.getElementById('poll__answers');
let answerId;
let interview;
let result;

function getInterview() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            interview = JSON.parse(xhr.responseText);
            console.log(interview);
            insertInterview();
        };
    });
};

function resultInterview() {
    console.log(answerId);
    const xhr = new XMLHttpRequest;
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(`vote=${interview.id}&answer=${answerId}`);

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            result = JSON.parse(xhr.responseText);
            console.log(result);
            insertResult();
        };
    });
};

function insertInterview() {
    let buttonAnswer = [];
    pollTitle.textContent = interview.data.title;
    for (let i = 0; i < interview.data.answers.length; i++) {
        buttonAnswer.push(`<button class="poll__answer" data-index="${i}">${interview.data.answers[i]}</button>`);
    };
    pollAnswer.insertAdjacentHTML('afterbegin', buttonAnswer.join(''));
    return onButtons();
};

function onButtons() {
    let buttons = document.getElementsByClassName('poll__answer');
    for (let index of buttons) {
        index.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!');
            answerId = index.dataset.index;
            resultInterview();
        });
    };
};

function insertResult() {
    let textAnswer = [];
    let allVotes = result.stat.reduce((acc, cur) => (+acc) + cur.votes, 0);
    console.log(allVotes);
    for (let i = 0; i < result.stat.length; i++) {
        textAnswer.push(`<p>${result.stat[i].answer}:${((result.stat[i].votes/allVotes)*100).toFixed(2)}%</p>`);
    };
    pollAnswer.style = 'display: none';
    pollTitle.insertAdjacentHTML('beforeend', textAnswer.join(''));
};

getInterview();
