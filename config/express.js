var express = require("express");
var consign = require("consign");
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var helmet = require("helmet");
var methodOverride = require('method-override');
var morgan = require('morgan');
var logger = require('./logger');
var config = require('./config')();

module.exports = function() {
	var apps = express();
	apps.set("port", config.port);
	apps.set("json spaces", 4);
	apps.use(morgan("common", {
		stream: {
			write: function(message) {
				logger.info(message);
			}
		}
	}));

	apps.use(express.static("./public"));
	apps.use(bodyParser.urlencoded({extended: true}));
	apps.use(bodyParser.json());
	apps.use(methodOverride());

	apps.disable('x-powered-by');
	apps.use(helmet.xframe());
	apps.use(helmet.xssFilter());
	apps.use(helmet.nosniff());

	consign({
		verbose: false,	
		cwd: 'app'	
	})		
	.include('models')
	.include('routes')	
	.into(apps);

	apps.get('*', function(req, res) {
		res.status(404).json({msg: 'path not found!'});
	});

	return apps;
}