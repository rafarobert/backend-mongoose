const mongoose = require('mongoose');

let db;

module.exports = function Connection() {
	if(!db) {
		db = mongoose.connect('mongodb://localhost/dev_esvender', {
			useMongoClient: true
		});
	}
	return db;
}

