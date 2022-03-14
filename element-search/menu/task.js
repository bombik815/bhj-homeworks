const  menuItems = document.querySelectorAll('.menu__item');
const menuLink = document.querySelectorAll('.menu__link');


menuLink.forEach(e => {
	e.addEventListener('click', function (e) {
		let target = e.target;
		let targetParent = target.closest('.menu__item');

		if (targetParent) {
			let subm = targetParent.getElementsByClassName('menu_sub')[0];
			if (!subm.classList.contains('menu_active')) {
			  subm.classList.add('menu_active');
			}else{
				subm.classList.remove('menu_active');
			}
		 }
	});
});
