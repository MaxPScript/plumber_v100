log = console.log;

function getHeaderFlexBasis() {
	const header = document.querySelector(".header");
	const styles = window.getComputedStyle(header);
	const prop = styles.getPropertyValue("flex-basis");
	log(`flex-basis: ${prop}`);
}
getHeaderFlexBasis();
