log = console.log;

element = document.querySelector(".header__grid");
log(element);

// Get the necessary elements
// const myDiv = document.getElementById('myDiv');
// const infoSpan = document.getElementById('infoSpan');

// Function to update the span with width and height information
let span = document.createElement("span");
element.appendChild(span);
function updateInfoSpan() {
	let boxRect = element.getBoundingClientRect();
	span.style.position = "absolute";
	span.style.bottom = "0";
	span.style.right = "0";
	let width = Math.floor(boxRect.width);
	let height = Math.floor(boxRect.height);
	// span.textContent = "";
	span.innerText = `Width: ${width}px, Height: ${height}px, Root font-size: ${window.html}`;
	// element.removeChild(span);
}

// Initial update
updateInfoSpan();

// Attach the update function to the window resize event
window.addEventListener("resize", updateInfoSpan);
window.addEventListener("load", updateInfoSpan);
