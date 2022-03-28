const editor = document.querySelector('#editor');
const btnClear = document.querySelector('.clear-textarea');

pasteText();

function onEditor() {
    localStorage.text = editor.value;
};

function onClear() {
    editor.value = '';
    localStorage.removeItem('text');
};

function pasteText() {
    if (localStorage.text) {
        editor.value = localStorage.getItem('text');
    };
};

editor.addEventListener('input', onEditor);
btnClear.addEventListener('click', onClear);
