const express = require("express");

const apiRouter = require("./routes");

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("views"));
app.use(express.static("public"));

app.use("/api", apiRouter);

app.listen(port, () => {
	console.log(`Server is listeing on http://localhost:${port}`);
});
