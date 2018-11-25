var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById('gradient');

function setGradient() {
	body.style.background = 
	"Linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

// You can comment these two lines out if you use the 
// oninput attribute in the input tag in HTML 

// color1.addEventListener("input", setGradient);
// color2.addEventListener("input", setGradient);

