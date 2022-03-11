const items = document.getElementsByClassName('menu__item');



for(let i=0; i< items.length; i++){
	items[i].addEventListener('mouseenter', showSub, false);
	items[i].addEventListener('mouseleave', hideSub, false);
}

function showSub(){
	if(this.children.length>1){
		this.children[1].style.display = 'block';
	}else{
		return false;
	}
}

function hideSub(){
	if(this.children.length>1){
		this.children[1].style.display = 'none';
	}else{
		return false;
	}
}