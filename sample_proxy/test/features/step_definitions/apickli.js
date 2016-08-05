/* jslint node: true */
'use strict';

var apickli = require('apickli');

module.exports = function() {
	// cleanup before every scenario
	this.Before(function(scenario, callback) {
		this.apickli = new apickli.Apickli('http', 'seanwilliams-test.apigee.net/basepath');
		callback();
	});

	var subtractionResult;

	this.When(/^I subtract (.*) from (.*)$/, function(variable1, variable2, callback) {
		var value1 = this.apickli.getGlobalVariable(variable1); 
		var value2 = this.apickli.getGlobalVariable(variable2);
		subtractionResult = value2 - value1;

		callback();
	});

	this.Then(/^result should be (\d+)$/, function(result, callback) {
		if (subtractionResult == result) {
			callback();
		} else {
			callback.fail(subtractionResult + ' is not equal to ' + result);
		}
	});

};
