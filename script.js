
// function to create a buttom that changes our page to dark mode
// text becomes light color and background becomes dark color
function dark_mode() {
	// starts with normal colors "mode"
	let body = document.body; 
	body.classList.toggle("mode");

	// switches to second set of colors "button_mode" when button is hit
	let button = document.getElementById("button");
	button.classList.toggle("button_mode");
}