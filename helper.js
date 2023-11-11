log = console.log;

function getHeaderFlexBasis() {
	const header = document.querySelector(".header");
	const styles = window.getComputedStyle(header);
	const flexBasis = styles.getPropertyValue("flex-basis");
	const flexGrow = styles.getPropertyValue("flex-grow");
	const flexShrink = styles.getPropertyValue("flex-shrink");
	log(`flex-basis: ${flexBasis}`);
	log(`flex-grow: ${flexGrow}`);
	log(`flex-shrink: ${flexShrink}`);

	const outputDiv = document.querySelector(".headerFlexBasis");
	outputDiv.innerText = `
	${flexBasis}
	${flexGrow}
	${flexShrink}
	`;
}
getHeaderFlexBasis();
