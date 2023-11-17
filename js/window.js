log = console.log;

window.addEventListener("load", (e) => {
	// const navbar = document.querySelector(".navbar");
	// const styles = window.getComputedStyle(navbar);
	// const height = styles.getPropertyValue("height");
	const output = document.querySelector(".windowWidthAndHeight");
	output.innerText = `window height: ${window.innerHeight}`;
	output.innerText = `window width: ${window.innerWidth}`;
});
window.addEventListener("resize", (e) => {
	// const navbar = document.querySelector(".navbar");
	// const styles = window.getComputedStyle(navbar);
	// const height = styles.getPropertyValue("height");
	const output = document.querySelector(".windowWidthAndHeight");
	output.innerText = `window height: ${window.innerHeight}`;
	output.innerText = `window width: ${window.innerWidth}`;
});
