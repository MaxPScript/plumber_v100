log = console.log;

window.onload = function () {
	const h1 = document.getElementsByTagName("h1")[0];
	const h3 = document.getElementsByTagName("h3")[0];
	const pipes = document.querySelector(".header__pipesImage");

	const info = document.querySelector(".info");
	let widthWindow = window.innerWidth;
	let heightWindow = window.innerHeight;
	const spans = info.querySelectorAll("span");
	spans[0].innerText = widthWindow;
	spans[1].innerText = heightWindow;

	const stylesH1 = window.getComputedStyle(h1);
	const stylesH3 = window.getComputedStyle(h3);
	const stylesPipes = window.getComputedStyle(pipes);

	const fontSizeH1 = stylesH1.getPropertyValue("font-size");
	const gridColumnStart = stylesH1.getPropertyValue("grid-column-start");
	const fontSizeH3 = stylesH3.getPropertyValue("font-size");
	const widthPipes = stylesPipes.getPropertyValue("width");

	const spanH1 = document.querySelector("h1 span");
	const spanH3 = document.querySelector("h3 span");
	const spanPipes = pipes.querySelector("span");

	spanH1.textContent = fontSizeH1 + gridColumnStart;
	spanH3.textContent = fontSizeH3;
	spanPipes.textContent = widthPipes;
};
window.onresize = function () {
	const h1 = document.getElementsByTagName("h1")[0];
	const h3 = document.getElementsByTagName("h3")[0];
	const pipes = document.querySelector(".header__pipesImage");

	const info = document.querySelector(".info");
	let widthWindow = window.innerWidth;
	let heightWindow = window.innerHeight;
	const spans = info.querySelectorAll("span");
	spans[0].innerText = widthWindow;
	spans[1].innerText = heightWindow;

	const stylesH1 = window.getComputedStyle(h1);
	const stylesH3 = window.getComputedStyle(h3);
	const stylesPipes = window.getComputedStyle(pipes);

	const fontSizeH1 = stylesH1.getPropertyValue("font-size");
	const gridColumnStart = stylesH1.getPropertyValue("grid-column-start");
	const fontSizeH3 = stylesH3.getPropertyValue("font-size");
	const widthPipes = stylesPipes.getPropertyValue("width");

	const spanH1 = document.querySelector("h1 span");
	const spanH3 = document.querySelector("h3 span");
	const spanPipes = pipes.querySelector("span");

	spanH1.textContent = fontSizeH1 + gridColumnStart;
	spanH3.textContent = fontSizeH3;
	spanPipes.textContent = widthPipes;
};
window.onscroll = function () {
	// const
	const info = document.querySelector(".info");
	let widthWindow = window.innerWidth;
	let heightWindow = window.innerHeight;
	const spans = info.querySelectorAll("span");
	spans[0].innerText = widthWindow;
	spans[1].innerText = heightWindow;
};
