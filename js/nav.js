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
