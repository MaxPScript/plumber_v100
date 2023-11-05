log = console.log;

//  BUTTON ON/OFF BORDERS
borderToggle = () => {
	const headerGrid = document.querySelector(".header__grid");
	const headerGridItems = document.querySelectorAll(".header__grid > *");

	const stylesHeaderGrid = window.getComputedStyle(headerGrid);
	log(stylesHeaderGrid);

	// log("border ON");
	// log(headerGrid);
	// log(headerGridItems);
};
//  BUTTON ON/OFF BORDERS
