const timer = document.getElementById('timer');
let seconds_timer_id = setInterval(() => {
	if (Number(timer.textContent) > 0){
		timer.textContent = Number(timer.textContent) - 1;
	} else {
		alert('Вы победили в конкурсе!');
		clearInterval(seconds_timer_id);
	}
}, 1000);




function getTimeRemaining(endtime) {
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor((t / 1000) % 60);
	var minutes = Math.floor((t / 1000 / 60) % 60);
	var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
	return {
	  total: t,
	  days: days,
	  hours: hours,
	  minutes: minutes,
	  seconds: seconds
	};
 }

function initializeClock(id, endtime) {
	let clock = document.getElementById(id);
	let daysSpan = clock.querySelector(".days");
	let hoursSpan = clock.querySelector(".hours");
	let minutesSpan = clock.querySelector(".minutes");
	let secondsSpan = clock.querySelector(".seconds");

	function updateClock() {
		var t = getTimeRemaining(endtime);
  
		if (t.total <= 0) {
		  document.getElementById("countdown").className = "hidden";
		  document.getElementById("deadline-message").className = "visible";
		  clearInterval(timeinterval);
		  return true;
		}
  
		daysSpan.innerHTML = t.days;
		hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
		minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
		secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
	 }
  
	 updateClock();
	 var timeinterval = setInterval(updateClock, 1000);
}


let deadline = new Date(Date.parse(new Date()) + 5000 * 1000); 
initializeClock("countdown", deadline);