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

	  	var dateObject;
	  	if(isNumeric(req.params.dateRepresentation)) {	  		
	  		dateObject = new Date(req.params.dateRepresentation * 1000);	  		
	  	}
	  	else {
	  		dateObject = new Date(req.params.dateRepresentation);
	  	}	  	
	  	res.json({
	  		unix: dateObject.getTime()/1000,
	  		natural: isNaN(dateObject.getTime()) ? null : monthNames[dateObject.getMonth()] + ' ' + dateObject.getDate() + ', ' + dateObject.getFullYear()
	  	});
	  });

	function isNumeric(n) {
  		return !isNaN(parseFloat(n)) && isFinite(n);
	}

}