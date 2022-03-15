
const modal = document.querySelector('#modal_main');
const modalSuccess = document.querySelector('#modal_success');

const modelActive = document.getElementsByClassName('.modal_active');
const closeButton = modal.getElementsByClassName('modal__close')[0];
const btnRed = document.querySelector('.btn');


// window.onclick =  function(e) {
// 	modal.classList.add('modal_active');
// };
var delayPopup = 3000;
setTimeout("document.getElementById('modal_main').classList.add('modal_active')", delayPopup);

// закрываем модальное окно на кнопку X
modal.getElementsByClassName('modal__close')[0].onclick = function(e) {
	e.stopPropagation();
	modal.classList.remove('modal_active');
 };

// закрываем модальное окно на кнопку X
modalSuccess.getElementsByClassName('modal__close')[0].onclick = function(e) {
	e.stopPropagation();
	modalSuccess.classList.remove('modal_active');
 };


 btnRed.onclick = function(e)  {
	 if (modal.classList.contains('modal_active')){
		modal.classList.remove('modal_active');
		modalSuccess.classList.add('modal_active');
	}
};