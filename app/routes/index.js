module.exports = function(app) {

	var DateParser = app.models.dateParser;	

	app.route("/")
	  .get(function(req, res) {
	  	res.json({status: 'Timestamp Microservice API'});
	  });

	app.route("/parser/:dateRepresentation")
	  .get(function(req, res) {	  	
	  	var dateParser = new DateParser(req.params.dateRepresentation);		  	
	  	res.json({
	  		unix: dateParser.getTimestamp(),
	  		natural: dateParser.getNaturalDate()
	  	});
	  });	
}