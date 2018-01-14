var Mocha = require('mocha');
var mocha = new Mocha({
    reporter: 'mochawesome',
    reporterOptions: {
        reportDir:'../reports/mochawesome-report'
    }
  });
  mocha.addFile(
    './server.js'
);
mocha.run(function() {
    console.log('All done');
    process.exit();
});
