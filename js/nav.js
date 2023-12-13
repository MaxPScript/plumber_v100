log = console.log;
// dir = console.dir;
window.addEventListener("load", (e) => {
	const navbar = document.querySelector(".navbar");
	const styles = window.getComputedStyle(navbar);
	const height = styles.getPropertyValue("height");
	const output = document.querySelector(".navbar--height");
	output.innerText = `nav height: ${height}`;
});
window.addEventListener("resize", (e) => {
	const navbar = document.querySelector(".navbar");
	const styles = window.getComputedStyle(navbar);
	const height = styles.getPropertyValue("height");
	const output = document.querySelector(".navbar--height");
	output.innerText = `nav height: ${height}`;
});

window.addEventListener("scroll", (e) => {
	let nav = document.querySelector(".navbar");
	if (getWindowScrollY() > 100) {
		// nav.classList.add("opacity_0");
	} else {
		// nav.classList.remove("opacity_0");
	}
});
function getWindowScrollY() {
	// return window.scrollY;
}
