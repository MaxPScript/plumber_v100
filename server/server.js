log = console.log;
console.log("Current working directory:", process.cwd());

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
	// Set CORS headers
	res.setHeader("Access-Control-Allow-Origin", "*"); // You might want to restrict this to specific origins in production
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	if (req.method === "POST" && req.url === "/storeData") {
		handlePostRequest(req, res);
	} else if (req.method === "GET" && req.url === "/getData") {
		handleGetRequest(req, res);
	} else {
		// serveStaticFile(req, res);
	}
	// Send a response
	res.writeHead(200, { "Content-Type": "text/plain" });
	res.end("Hello, this is your server response!");
});
const PORT = 3000;
server.listen(PORT, () => {
	log(`server running on http://localhost:${PORT}`);
});
// handle POST requests to /storeData
function handlePostRequest(req, res) {
	let data = "";
	req.on("data", (chunk) => {
		data += chunk;
	});
	req.on("end", () => {
		// assuming data is in JSON format
		const jsonData = JSON.parse(data);
		// store data or process it as needed
		// for now, just write it to a file
		fs.writeFile("data.json", JSON.stringify(jsonData), (err) => {
			if (err) {
				console.error(err);
				res.statusCode = 500;
				res.end("Internal Server Error");
			} else {
				res.statusCode = 200;
				res.end("Data stored successfully");
			}
		});
	});
}
// handle GET requests to /getData
function handleGetRequest(req, res) {
	fs.readFile("data.json", "utf-8", (err, data) => {
		if (err) {
			console.error(err);
			res.statusCode = 500;
			res.end("Internal Server Error");
		} else {
			res.statusCode = 200;
			res.setHeader("Content-Type", "application/json");
			res.end(data);
		}
	});
}
// function to serve static files
function serveStaticFile(req, res) {
	const filePath = req.url === "/" ? "/index.html" : req.url;
	const fullPath = __dirname + filePath;
	fs.readFile(fullPath, "utf-8", (err, data) => {
		if (err) {
			console.error(err);
			res.statusCode = 404;
			res.end("Not Found");
		} else {
			res.statusCode = 200;
			res.end(data);
		}
	});
}
