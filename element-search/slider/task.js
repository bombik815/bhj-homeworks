const next = document.querySelector('.slider__arrow_next'),
		prev = document.querySelector('.slider__arrow_prev');
const slides = document.getElementsByClassName("slider__item");
const dots = document.getElementsByClassName("slider__dot");

let slideIndex = 1;
showSlides(slideIndex);

next.addEventListener('click', function (){
	showSlides(slideIndex += 1);
});

prev.addEventListener('click', function (){
	showSlides(slideIndex -= 1); 
});

// function currentSlide(n) {
// 	showSlides(slideIndex = n);
// }

function showSlides(n) {
	let i;

	if (n > slides.length) {
	  slideIndex = 1;
	}
	if (n < 1) {
		 slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		 slides[i].classList.remove('slider__item_active');
	}
	for (i = 0; i < dots.length; i++) {
		 dots[i].className = dots[i].className.replace(" slider__dot_active", "");
	}
	slides[slideIndex-1].classList.add('slider__item_active');
	dots[slideIndex - 1].className += " slider__dot_active";
}


