function bugMeMaybe() {
	if (Math.floor(Math.random() * 60) == 0) {
		alert("Watcha doin?");
	}
}

setInterval(function(){bugMeMaybe()}, 60000);