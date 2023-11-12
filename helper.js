log = console.log;

function getHeaderFlexBasis() {
	const header = document.querySelector(".header");
	const styles = window.getComputedStyle(header);
	const flexBasis = styles.getPropertyValue("flex-basis");
	const flexGrow = styles.getPropertyValue("flex-grow");
	const flexShrink = styles.getPropertyValue("flex-shrink");
	const bgAttachment = styles.getPropertyValue("background-attachment");
	log(`flex-basis: ${flexBasis}`);
	log(`flex-grow: ${flexGrow}`);
	log(`flex-shrink: ${flexShrink}`);
	log(`background-attachment: ${bgAttachment}`);

	const outputDiv = document.querySelector(".headerFlexBasis");
	outputDiv.innerText = `
	120 dvb ${flexBasis}
	${flexGrow}
	${flexShrink}
	${bgAttachment}
	`;
}

function getWindowWidthAnsHeight() {
	// const header = document.querySelector(".header");
	// const styles = window.getComputedStyle(header);
	// const flexBasis = styles.getPropertyValue("flex-basis");
	// const flexGrow = styles.getPropertyValue("flex-grow");
	const outputDiv = document.querySelector(".windowWidthAndHeight");
	outputDiv.innerText = `
		window.innerWidth: ${window.innerWidth}
		window.innerHeight: ${window.innerHeight}
	`;
}

function getMetaUserScalable() {
	const metaTagViewport = document.querySelector("meta[name=viewport]");
	log(metaTagViewport);
	const userScalable = metaTagViewport.getAttribute("user-scalable");
	log(typeof userScalable);
	const outputDiv = document.querySelector(".metaViewport");
	if (userScalable) {
		outputDiv.innerText = `
		user-scalable: ${userScalable}
		`;
	} else {
		outputDiv.innerText = `
		user-scalable attr is not found
		`;
	}
}

window.addEventListener("load", (ev) => {
	getHeaderFlexBasis();
	getWindowWidthAnsHeight();
	getMetaUserScalable();
});
window.addEventListener("resize", (ev) => {
	getWindowWidthAnsHeight();
	getMetaUserScalable();
});
