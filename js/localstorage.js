log = console.log;

const landscape = localStorage.getItem("landscape");
// const landscape = "1x2,3x4";
// log(landscape);
// const firstFromLandscape = landscape[0];
// log(firstFromLandscape);
// log(typeof firstFromLandscape);

let widths = [];
let heights = [];

for (let i = 0, j = 0; i < landscape.length; i++) {
	let width = "";
	if (landscape[i] === ",") {
		j = i + 1;
	}
	if (landscape[i] === "x") {
		while (j < i) {
			width += landscape[j];
			++j;
		}
		widths.push(+width);
		j = i;
	}
}
// widths = widths.filter((a) => a <= 1400);
// widths.sort((a, b) => b - a);
log(widths);

for (let i = 0, j = 0; i <= landscape.length; i++) {
	let height = "";
	if (landscape[i] === "x") {
		j = i + 1;
	}
	if (landscape[i] === "," || i === landscape.length) {
		while (j < i) {
			height += landscape[j];
			++j;
		}
		heights.push(+height);
		j = i;
	}
}
// heights = heights.filter((a) => a <= 1400);
// heights = heights.slice(heights.length - widths.length);

// heights.sort((a, b) => b - a);

log(heights);

// ASPECT RATIO
let aspectRatio = [];
for (i = 0; i < widths.length; i++) {
	let k = (widths[i] / heights[i]).toFixed(1);
	aspectRatio.push(k);
	// for(j=0;j<heights.length;j++){

	// }
}
log(aspectRatio);
aspectRatio.sort((a, b) => a - b);
log(aspectRatio);
setAspectRatio = new Set(aspectRatio);
log(setAspectRatio);
// ASPECT RATIO

// VISUALISATION
function createDivs(w, h) {
	const div = document.createElement("div");
	div.className = "divs";
	div.style.width = `${w / 3}px`;
	div.style.height = `${h / 3}px`;
	document.body.appendChild(div);
}
// for (let i = 0; i < 2; i++) {
// 	createDivs(widths[i], heights[i]);
// }
createDivs(widths[2], heights[2]);
createDivs(widths[widths.length - 1], heights[heights.length - 1]);
// VISUALISATION
