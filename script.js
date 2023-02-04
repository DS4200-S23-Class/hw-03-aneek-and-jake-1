function dark_mode() {
	let body = document.body; 
	body.classList.toggle("mode");

	let button = document.getElementById("button");
	button.classList.toggle("button_mode")
}