const arrFontSize = Array.from(document.getElementsByClassName('font-size'));
const book = document.querySelector('.book__content');

function changeFont(ev) {
	ev.preventDefault();
	arrFontSize.forEach((e) => {
		if (e.classList.contains('font-size_active')) {
			e.classList.remove('font-size_active');
			book.classList.remove('font-size_small');
			book.classList.remove('font-size_big');
		}
	});
	if (this.classList.contains('font-size_small')) {
		this.classList.add('font-size_active');
		book.classList.add('font-size_small');
	} else if (this.classList.contains('font-size_big')) {
		this.classList.add('font-size_active');
		book.classList.add('font-size_big');
	} else if (!this.classList.contains('font-size_big') && !this.classList.contains('font-size_small')) {
		this.classList.add('font-size_active');
	}
}

arrFontSize.forEach((e) => {
	e.addEventListener('click', changeFont);
});
