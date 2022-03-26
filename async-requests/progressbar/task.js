const progress = document.getElementById('progress');
const form = document.getElementById('form');
const input = document.querySelector('input')
const btnSend = document.getElementById('send');

function uploadFile(e) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    let percent = (input.files[0].size) / 100;
    xhr.upload.onprogress = function(event) {
        progress.value = (Math.round(event.loaded / percent)) / 100;
    }
    xhr.send(input.files[0]);
    e.preventDefault();
}

form.addEventListener('submit', uploadFile)
