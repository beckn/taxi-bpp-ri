const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const routes = require('./api/routes');


const app = express();

const dbUri = 'mongodb://localhost:27017/ride-management';
mongoose.connect(dbUri)
	.then((result) => {
		console.log("connected to db");
		app.listen(port, function () {
			console.log('Server started on port: ' + port);
		});
	})
	.catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));


routes(app);

