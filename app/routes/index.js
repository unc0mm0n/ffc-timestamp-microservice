'use strict';

var path = process.cwd();
var weather = require('../common/weather-processor.js')

module.exports = function (app, passport) {

	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});

	app.route('/api/:str')
		.get(function (req, res) {
			res.writeHead(200, {'content-type': 'text/json'});
			res.end(JSON.stringify(weather(req.params.str)));
		});
};
