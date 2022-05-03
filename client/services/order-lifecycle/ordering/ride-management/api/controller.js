'use strict';

const Ride = require('../models/ride');
const Blog = require('../models/ride');

const properties = require('../package.json')
const distance = require('../service/distance');

var controllers = {
	about: function (req, res) {
		var aboutInfo = {
			name: properties.name,
			version: properties.version
		}
		res.json(aboutInfo);
	},
	getDistance: function (req, res) {
		distance.find(req, res, function (err, dist) {
			if (err)
				res.send(err);
			res.json(dist);
		});
	},
	postSomething: function(req, res) {
		console.log(req);
		res.json({"requestBody" : req.body});
	},
	createRide: function(req, res) {
		console.log("received request to create ride");

		const ride = new Ride(req.body);

		ride.save()
			.then((result) => {
				res.json(result);
			})
			.catch((err) => {
				console.log(err)
			});
	},
	findRide : function(req, res) {
		console.log(req.params);
	},
	fetchRides : function(req, res) {
		console.log(req.params);
	},
	updateRide: function(req, res) {
		console.log(req);
	},
	deleteRide: function(req, res) {
		console.log(req);
	}
};

module.exports = controllers;