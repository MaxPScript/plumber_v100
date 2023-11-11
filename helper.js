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

window.addEventListener("load", (ev) => {
	getHeaderFlexBasis();
});
