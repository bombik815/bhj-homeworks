const menuItems = document.querySelectorAll('.menu__item');
const menuLink = document.querySelectorAll('.menu__link');
const arrItem = Array.from(menuItems);


menuLink.forEach(e => {
	e.addEventListener('click', function (e) {
			let target = e.target;
			let targetParent = target.closest('.menu__item');
			let subm = targetParent.getElementsByClassName('menu_sub')[0];

			if (targetParent.querySelector('.menu_sub') !== null &&
				targetParent.querySelector('.menu_active') === null) {

				arrItem.forEach((e, index) => {
					if (e.querySelector('.menu_active')) {
						arrItem[index].querySelector('.menu_sub').classList.toggle('menu_active');
					}
				});
				targetParent.querySelector('.menu_sub').classList.add('menu_active');
	    	  	return e.preventDefault();
			} else if (targetParent.querySelector('.menu_sub') !== null && 
							targetParent.querySelector('.menu_active') !== null) {
							targetParent.querySelector('.menu_sub').classList.toggle('menu_active');
							return e.preventDefault();
						}
	});
});
