describe("Routes: index", function() {

	describe("GET /", function() {
		it("returns the API status", function(done) {
			request.get('/')
			.expect(200)
			.end(function(err, res) {
				var expected = {status: 'Timestamp Microservice API'};
				expect(res.body).to.eql(expected);
				done(err);
			});
		});
	});

	describe("GET /parser/:dataRepresentation", function() {
		it("returns date Representation by timestamp at 00:00", function(done) {
			request.get('/parser/' + 1455760800)
			.expect(200)
			.end(function(err, res) {				
				expect(res.body.unix).to.eql(1455760800);
				expect(res.body.natural).to.eql('February 18, 2016');
				done(err);
			});
		});
		it("returns date Representation by String format: Month Day, Year (Zero hour)", function(done) {
			request.get('/parser/February 18, 2016')
			.expect(200)
			.end(function(err, res) {				
				expect(res.body.unix).to.eql(1455760800);
				expect(res.body.natural).to.eql('February 18, 2016');
				done(err);
			});
		});

		it("returns all null values informed by wrong path parameter", function(done) {
			request.get('/parser/WRONG_VALUE')
			.expect(200)
			.end(function(err, res) {				
				expect(res.body.unix).to.eql(null);
				expect(res.body.natural).to.eql(null);
				done(err);
			});
		});
	});
})