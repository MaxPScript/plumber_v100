log = console.log;
log("pipes");

window.addEventListener("load", (e) => {
	const pipes = document.querySelector(".header__pipesImage");
	const styles = window.getComputedStyle(pipes);
	const height = styles.getPropertyValue("height");
	const width = styles.getPropertyValue("width");
	// const output = document.querySelector(".navbar--height");
	// output.innerText = `nav height: ${height}`;
	if (height > width) {
		pipes.style.border = "2px solid orange";
	} else {
		pipes.style.border = "unset";
	}
});

window.addEventListener("resize", (e) => {
	const pipes = document.querySelector(".header__pipesImage");
	const styles = window.getComputedStyle(pipes);
	const height = styles.getPropertyValue("height");
	const width = styles.getPropertyValue("width");
	// const output = document.querySelector(".navbar--height");
	// output.innerText = `nav height: ${height}`;
	if (height > width) {
		pipes.style.border = "5px solid red";
		log("height <= width");
	} else {
		pipes.style.border = "unset";
	}
});
