log = console.log;

window.addEventListener("load", (e) => {
	// const navbar = document.querySelector(".navbar");
	// const styles = window.getComputedStyle(navbar);
	// const height = styles.getPropertyValue("height");
	const output = document.querySelector(".windowWidthAndHeight");
	output.innerText = `window height: ${window.innerHeight} 
    width: ${window.innerWidth}`;
	const output2 = document.querySelector(".windowScroll");
	output2.innerText = `window scrollY: ${Math.floor(window.scrollY)} 
    `;
	// output.innerText = `window width: ${window.innerWidth}`;
});
window.addEventListener("resize", (e) => {
	// const navbar = document.querySelector(".navbar");
	// const styles = window.getComputedStyle(navbar);
	// const height = styles.getPropertyValue("height");
	const output = document.querySelector(".windowWidthAndHeight");
	output.innerText = `window height: ${window.innerHeight} 
    width: ${window.innerWidth}`;
	const output2 = document.querySelector(".windowScroll");
	output2.innerText = `window scrollY: ${Math.floor(window.scrollY)} 
    `;
	// output.innerText = `window width: ${window.innerWidth}`;
});
window.addEventListener("scroll", (e) => {
	const output2 = document.querySelector(".windowScroll");
	output2.innerText = `window scrollY: ${Math.floor(window.scrollY)} 
    `;
});
