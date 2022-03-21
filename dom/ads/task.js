const arrayRotator = Array.from(document.getElementsByClassName('rotator__case'));

function rotation() {
	let index = 0;
	setInterval(() => {
		arrayRotator.forEach((event) => {
			if (event.classList.contains('rotator__case_active')) {
				event.classList.remove('rotator__case_active');
			}
		});
		let index = Math.floor(Math.random() * (arrayRotator.length));
		arrayRotator[index].classList.add('rotator__case_active');
		arrayRotator[index].style.color = arrayRotator[index].dataset.color;
	}, arrayRotator[index].dataset.speed);
}

rotation();
