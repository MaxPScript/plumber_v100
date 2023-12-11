log = console.log;
const output = document.querySelector(".windowWidthAndHeight");

window.addEventListener("load", (e) => {
	// const navbar = document.querySelector(".navbar");
	// const styles = window.getComputedStyle(navbar);
	// const height = styles.getPropertyValue("height");
	// const output = document.querySelector(".windowWidthAndHeight");
	output.innerText = `window height: ${window.innerHeight} 
    window width: ${window.innerWidth}
	devicePixelRatio: ${window.devicePixelRatio}`;
	// output.innerText = `window width: ${window.innerWidth}`;
});
window.addEventListener("resize", (e) => {
	// const navbar = document.querySelector(".navbar");
	// const styles = window.getComputedStyle(navbar);
	// const height = styles.getPropertyValue("height");
	// const output = document.querySelector(".windowWidthAndHeight");
	output.innerText = `window height: ${window.innerHeight} 
    window width: ${window.innerWidth}
	devicePixelRatio: ${window.devicePixelRatio}`;
	// output.innerText = `window width: ${window.innerWidth}`;
});

// DPR

let remove = null;
// const output = document.querySelector("#output");

const updatePixelRatio = () => {
	if (remove != null) {
		remove();
	}
	const mqString = `(resolution: ${window.devicePixelRatio}dppx)`;
	const media = matchMedia(mqString);
	media.addEventListener("change", updatePixelRatio);
	remove = () => {
		media.removeEventListener("change", updatePixelRatio);
	};

	// output.textContent += ` devicePixelRatio: ${window.devicePixelRatio}`;
	output.innerText = `window height: ${window.innerHeight} 
    window width: ${window.innerWidth}
	devicePixelRatio: ${window.devicePixelRatio}`;
};

updatePixelRatio();

// DPR
