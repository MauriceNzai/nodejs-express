const fs = require("fs");

const path = require("path"); 

// iportant to use path module instead of hardcoding paths
// this allows to easily cater for diff os e.g windows \ and linux /
// another arg that join() takes is the dierctory where the file exists
fs.readFile(path.join(__dirname, "server.js"), (err, data) => {
	if (err) throw err;
	// data output as a buffer
	console.log(data);

	// use toString() method to output actual content
	// can also specify encoding as below
	// fs.readFile(path.join(__dirname, "server.js"), "utf-8", (err, data)
	console.log(data.toString());
});

// writing to a file, if file exists it is overwritten
fs.writeFile(path.join(__dirname, "serv.txt"), "Nice testing.", (err) => {
        if (err) throw err;
        console.log("Data written");
});

// appending new data to a file
fs.appendFile(path.join(__dirname, "serv.txt"), "Append testing.", (err) => {
        if (err) throw err;
        console.log("Data Appended");
});



// exit on uncaugth error
process.on("uncaughtException", err => {
	console.error(`Ucaught Error: ${err}`);
	process.exit(1);
});
