const express = require("express");
const app = express();

const path = require("path");
const cors = require("cors")
const PORT = process.env.PORT || 3000;

/**
 * Built-in iddleware to handle urlencoded data/form data
 * content-type: application/x-www-form-urlencoded
 *
 */
app.use(express.urlencoded({extended: false}));

// built-middleware for json
app.use(express.json());

// cross-origin resource sharing
app.use(cors())

// Serving static file
app.use(express.static(path.join(__dirname, "/public")));


// custom error handler middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send(err.message);
});


app.listen(PORT, () => {
	console.log(`Server Running on Port ${PORT}`)
});
