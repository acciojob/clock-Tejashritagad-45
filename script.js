//your JS code here. If required.
setInterval(()=>{
	const timerEle = document.querySelector("#timer");
	let now = new Date();
	let dateTime = now.toLocaleString();
	timerEle.textContent = dateTime;
},1000);