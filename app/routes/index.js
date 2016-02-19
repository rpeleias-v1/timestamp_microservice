module.exports = function(app) {

	app.route("/")
	  .get(function(req, res) {
	  	res.json({status: 'Timestamp Microservice API'});
	  });

	app.route("/parser/:dateRepresentation")
	  .get(function(req, res) {
	  	var monthNames = ["January", "February", "March", "April", "May", "June",
		  "July", "August", "September", "October", "November", "December"
		];	

	  	var dateObject = new Date(isNumeric(req.params.dateRepresentation) ? req.params.dateRepresentation * 1000 : req.params.dateRepresentation);		  	
	  	res.json({
	  		unix: dateObject.getTime()/1000,
	  		natural: isNaN(dateObject.getTime()) ? null : monthNames[dateObject.getMonth()] + ' ' + dateObject.getDate() + ', ' + dateObject.getFullYear()
	  	});
	  });

	function isNumeric(n) {
  		return !isNaN(parseFloat(n)) && isFinite(n);
	}

}