const arrayReveal = Array.from(document.getElementsByClassName('reveal'));

window.addEventListener('scroll', onScroll);

function onScroll() {
	arrayReveal.forEach((event) => {
		if (event.getBoundingClientRect().y < 928 && event.getBoundingClientRect().y > (-172)) {
			return event.classList.add('reveal_active');
		}
	});
}
