describe("Models: DateParser", function() {

	var DateObject = app.models.dateParser;

	describe("Valid object creation, by date Timestamp parameter", function(done) {
		var dateObject = new DateObject(1455760800);
		it("validate isNumeric() as true", function(done) {
			expect(dateObject.isNumeric()).to.be.true;
			done();
		});
		it("getTimestamp() must return a valid unix timestamp", function(done) {
			expect(dateObject.getTimestamp()).to.eql(1455760800);
			done();
		});
		it("getNaturalDate() must return a valid natural date representaion", function(done) {
			expect(dateObject.getNaturalDate()).to.eql('February 18, 2016');
			done();
		});
	});

	describe("Valid object creation, by Natural Date parameter", function(done) {
		var dateObject = new DateObject('February 18, 2016');
		it("validate isNumeric() as true", function(done) {
			expect(dateObject.isNumeric()).to.be.false;
			done();
		});
		it("getTimestamp() must return a valid unix timestamp", function(done) {
			expect(dateObject.getTimestamp()).to.eql(1455760800);
			done();
		});
		it("getNaturalDate() must return a valid natural date representaion", function(done) {
			expect(dateObject.getNaturalDate()).to.eql('February 18, 2016');
			done();
		});
	});

	describe("invalid object creation, by any parameter", function(done) {
		var dateObject = new DateObject('Invalid parameter');
		it("validate isNumeric() as true", function(done) {
			expect(dateObject.isNumeric()).to.be.false;
			done();
		});
		it("getTimestamp() must return null", function(done) {
			expect(dateObject.getTimestamp()).to.eql(null);
			done();
		});
		it("getNaturalDate() must return null", function(done) {
			expect(dateObject.getNaturalDate()).to.eql(null);
			done();
		});
	});
})