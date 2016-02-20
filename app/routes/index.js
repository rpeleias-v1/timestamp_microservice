module.exports = function(app) {

	var DateParser = app.models.dateParser;	

	/**
	 * @api {get} / API index
	 * @apiGroup Timestamp Parser
	 * @apiSuccess {String} status: API status message
	 * @apiSuccessExample {json} Success
	 *  HTTP/1.1 200 OK
	 * {"status": "Timestamp Microservice API"}
	 */
	app.route("/")
	  .get(function(req, res) {
	  	res.json({status: 'Timestamp Microservice API'});
	  });

	/**
	 * @api {get} /parser/:dateRepresentation URL Parser path
	 * @apiGroup Timestamp Parser
	 * @apiParam {String} dateRepresentation Date Representation. It can be a natural date or timestamp
	 * @apiParamExample {json} Natural Date format
	 *  {
	 *	  "dateRepresentation": "February 1, 2016"
	 *  } 
	 * @apiParamExample {json} Timestamp format
	 *  {
	 *	  "dateRepresentation": 1455760800
	 *  } 
	 * @apiSuccess {String} unix Unix timestamp format
	 * @apiSuccess {String} natural Natural Date format
	 * @apiSuccessExample {json} Success
	 *  HTTP/1.1 200 OK
	 *  {
	 *	  "unix": 1455760800
	 *	  "natural": "February 1, 2016"
	 *  } 
	 */
	app.route("/parser/:dateRepresentation")
	  .get(function(req, res) {	  	
	  	var dateParser = new DateParser(req.params.dateRepresentation);		  	
	  	res.json({
	  		unix: dateParser.getTimestamp(),
	  		natural: dateParser.getNaturalDate()
	  	});
	  });	
}