log = console.log;
log("text.txt");

// document.addEventListener("DOMContentLoaded", function () {
// 	const dataList = document.getElementById("data-list");

// 	fetch("./text.txt")
// 		.then((response) => response.json())
// 		.then((data) => {
// 			data.forEach((item) => {
// 				const listItem = document.createElement("li");
// 				listItem.textContent = `ID: ${item.id}, Name: ${item.name}`;
// 				dataList.appendChild(listItem);
// 			});
// 		})
// 		.catch((error) => {
// 			console.error("Error fetching data:", error);
// 		});
// });

document.addEventListener("DOMContentLoaded", function () {
	const dataContainer = document.getElementById("dataContainer");

	fetch("text.txt")
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.text();
		})
		.then((data) => {
			dataContainer.textContent = data;
		})
		.catch((error) => {
			console.error(
				"There has been a problem with your fetch operation:",
				error
			);
		});
});
