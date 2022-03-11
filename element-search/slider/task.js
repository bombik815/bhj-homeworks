const next = document.querySelector('.slider__arrow_next'),
		prev = document.querySelector('.slider__arrow_prev');
const slides = document.querySelectorAll('.slider__item');

let currentSlide = 0;

next.onclick = () => {
	goToSlide(currentSlide+1);
}

prev.onclick = () => {
	goToSlide(currentSlide-1);
	}


function goToSlide(n) {
	slides[currentSlide].className = 'slider__item';
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = 'slider__item slider__item_active';
  }
