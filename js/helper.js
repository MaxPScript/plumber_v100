log = console.log;

// function getHeaderFlexBasis() {
// 	const header = document.querySelector(".header");
// 	const styles = window.getComputedStyle(header);
// 	const flexBasis = styles.getPropertyValue("flex-basis");
// 	const flexGrow = styles.getPropertyValue("flex-grow");
// 	const flexShrink = styles.getPropertyValue("flex-shrink");
// 	const bgAttachment = styles.getPropertyValue("background-attachment");
// 	log(`flex-basis: ${flexBasis}`);
// 	log(`flex-grow: ${flexGrow}`);
// 	log(`flex-shrink: ${flexShrink}`);
// 	log(`background-attachment: ${bgAttachment}`);

// 	const outputDiv = document.querySelector(".headerFlexBasis");
// 	outputDiv.innerText = `
// 	120 dvb ${flexBasis}
// 	${flexGrow}
// 	${flexShrink}
// 	${bgAttachment}
// 	`;
// }

// function getMetaUserScalable() {
// 	const metaTagViewport = document.querySelector("meta[name=viewport]");
// 	const userScalable = metaTagViewport.getAttribute("user-scalable");
// 	const maxScale = metaTagViewport.getAttribute("maximum-scale");
// 	const minScale = metaTagViewport.getAttribute("minimum-scale");
// 	const outputDiv = document.querySelector(".metaViewport");
// 	if (userScalable) {
// 		outputDiv.innerText = `
// 		user-scalable: ${userScalable}
// 		max-scale: ${maxScale}
// 		min-scale: ${minScale}
// 		`;
// 	} else {
// 		outputDiv.innerText = `
// 		user-scalable attr is not found
// 		`;
// 	}
// }

window.addEventListener("load", (ev) => {
	getHeaderFlexBasis();
	getWindowWidthAndHeight();
	// getMetaUserScalable();
});
window.addEventListener("resize", (ev) => {
	getWindowWidthAndHeight();
	// getMetaUserScalable();
});
