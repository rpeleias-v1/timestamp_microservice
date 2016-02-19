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
		it("returns date Representation by timestamp", function(done) {
			request.get('/parser/' + 1455841108)
			.expect(200)
			.end(function(err, res) {
				var expected = {status: 'Timestamp Microservice API'};
				expect(res.body.unix).to.eql(1455841108);
				expect(res.body.natural).to.eql('February 18, 2016');
				done(err);
			});
		});
		it("returns date Representation by String format: Month Day, Year", function(done) {
			request.get('/parser/February 18, 2016')
			.expect(200)
			.end(function(err, res) {
				var expected = {status: 'Timestamp Microservice API'};
				expect(res.body.unix).to.eql(1455841108);
				expect(res.body.natural).to.eql('February 18, 2016');
				done(err);
			});
		});
	});
})