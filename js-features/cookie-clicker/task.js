const img = document.getElementById("cookie");
let counter = document.getElementById("clicker__counter");

img.onclick = () => {
	counter.innerHTML++;
	if ((Number(counter.textContent) % 2) === 0){
		img.width += 20;
		img.height += 20;
	} else{
		img.width -= 20;
		img.height -= 20;
	}


}
