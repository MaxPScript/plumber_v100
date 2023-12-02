log = console.log;

element = document.querySelector(".header__grid");
log(element);
element2 = document.querySelector(".header__titles");
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
	// ROOT font-size
	let html = document.querySelector("html");
	let htmlStyles = window.getComputedStyle(html);
	let htmlFontSize = htmlStyles.fontSize;
	// ROOT font-size
	// H1 font-size
	let h1 = element2.querySelector("h1");
	let h1Styles = window.getComputedStyle(h1);
	let h1FontSize = h1Styles.fontSize;
	// H1 font-size
	// span.textContent = "";
	span.innerText = `Width: ${width}px, Height: ${height}px, Root font-size: ${htmlFontSize}, H1 font-size: ${h1FontSize}`;
	// element.removeChild(span);
}

// Initial update
updateInfoSpan();

// Attach the update function to the window resize event
window.addEventListener("resize", updateInfoSpan);
window.addEventListener("load", updateInfoSpan);
