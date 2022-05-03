const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rideSchema = Schema({
	start: {
		location: {
			gps: {
				type: String,
				required: true
			},
			address: {
				full: {
					type: String,
					required: true
				}
			}
		},
		time: {
			timestamp: {
				type: Date,
				required: false
			}
		},
		instructions: {
			type: String,
			required: false
		},
		authorization: {
			token: {
				type: String,
				required: false
			},
			valid_from: {
				type: Date,
				required: false
			},
			valid_to: {
				type: Date,
				required: false
			},
			status: {
				type: String,
				required: false
			}
		}
	},
	end: {
		location: {
			gps: {
				type: String,
				required: false
			},
			address: {
				full: {
					type: String,
					required: false
				}
			}
		},
		time: {
			timestamp: {
				type: Date,
				required: false
			}
		},
		instructions: {
			type: String,
			required: false
		},
		authorization: {
			token: {
				type: String,
				required: false
			},
			valid_from: {
				type: Date,
				required: false
			},
			valid_to: {
				type: Date,
				required: false
			},
			status: {
				type: String,
				required: false
			}
		}
	},
	agent: {
		name: {
			full: {
				type: String,
				required: true
			}
		},
		phone: {
			type: String,
			required: true
		}
	},
	customer: {
		name: {
			full: {
				type: String,
				required: true
			}
		},
		phone: {
			type: String,
			required: true
		}
	},
	vehicle: {
		make: {
			type: String,
			required: true
		},
		model: {
			type: String,
			required: true
		},
		registration: {
			type: String,
			required: true
		},
		color: {
			type: String,
			required: true
		}
	}
}, { timestamps: true });

const Ride = mongoose.model('Ride', rideSchema);

module.exports = Ride;