module.exports = function(apps) {

	var DateParser = apps.models.dateParser;	

	apps.route("/")
	  .get(function(req, res) {
	  	res.json({status: 'Timestamp Microservice API'});
	  });

	apps.route("/parser/:dateRepresentation")
	  .get(function(req, res) {	  	
	  	var dateParser = new DateParser(req.params.dateRepresentation);		  	
	  	res.json({
	  		unix: dateParser.getTimestamp(),
	  		natural: dateParser.getNaturalDate()
	  	});
	  });	
}