const modal = document.querySelector('.modal');
const modelActive = document.getElementsByClassName('.modal_active');
const closeButton = modal.getElementsByClassName('modal__close')[0];
const btn_red = document.querySelector('.btn');
const greenBtn = document.querySelector("#modal_success");
const redBtn = document.querySelector("#modal_main");


document.addEventListener('click', function(e) {
	modal.classList.add('modal_active');
});

// закрываем модальное окно на кнопку X
closeButton.onclick = function(e) {
	e.stopPropagation();
	modal.classList.remove('modal_active');
 };


 btn_red.onclick = function(e)  {
	 if (btn_red.classList.contains('btn_success')){
		btn_red.classList.toggle('btn_success');
		btn_red.textContent = 'Сделать хорошо';
	 }else {
		btn_red.classList.toggle('btn_success');
		btn_red.classList.toggle('show-success');
		btn_red.textContent = 'Хорошо сделано!';
	 }
};