var jasmineReporters = require('jasmine-reporters');

exports.config = {

  framework: 'jasmine2',
 	specs: ['../test/spec.js', '../test/calculatePrice.js', '../test/end2endLinearFlow.js'],
  	capabilities: {
  		browserName: 'chrome',
  		'chromeOptions': {
    		'args': ['--disable-extensions']
  		}
	},

	onPrepare: function(){

		//Generates XML Report
		var junitReporter = new jasmineReporters.JUnitXmlReporter({
    		savePath: '../testReport'
		});
		//Create an report after executing the script
		jasmine.getEnv().addReporter(junitReporter);
		
	}

}
