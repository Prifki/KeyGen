var checker = require('./keychecker');
var gen = require('./keygen');
for (var i=0; i<1000; i++)
	console.log(checker.check(gen.makeKey()));