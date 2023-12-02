log = console.log;

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
	// let scrollY = window.scrollY;
	let nav = document.querySelector(".navbar");
	// nav.style.top = `${getWindowScrollY()}px`;
	if (getWindowScrollY() > 100) {
		// nav.classList.remove("opacity_1");
		nav.classList.add("opacity_0");
	} else {
		nav.classList.remove("opacity_0");
		// nav.classList.add("opacity_1");
	}
});
function getWindowScrollY() {
	return window.scrollY;
}
// log(getWindowScrollY());
