const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const routes = require("./routes");
const app = express();

mongoose.connect('mongodb://localhost/ololo', {useMongoClient: true});
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use("/api", routes);

app.listen(3002, () => {
	console.log("listening on 3002...");
});
