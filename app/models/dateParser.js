module.exports = function() {
	
	var DateParser = function(dateRepresentation) {
		this.dateRepresentation = dateRepresentation;
		this.dateObject = new Date(this.isNumeric() ? this.dateRepresentation * 1000 : this.dateRepresentation);
		this.monthNames = ["January", "February", "March", "April", "May", "June",
		  "July", "August", "September", "October", "November", "December"
		];	
	};

	DateParser.prototype.isNumeric = function() {
		return !isNaN(parseFloat(this.dateRepresentation)) && isFinite(this.dateRepresentation);
	}

	DateParser.prototype.getTimestamp = function() {
		return isNaN(this.dateObject.getTime()) ? null : this.dateObject.getTime()/1000;
	};

	DateParser.prototype.getNaturalDate = function() {
		return isNaN(this.dateObject.getTime()) ? null : this.monthNames[this.dateObject.getMonth()] + ' ' + this.dateObject.getDate() + ', ' + this.dateObject.getFullYear()
	};

	return DateParser;
}