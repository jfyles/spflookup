var dns = require('native-dns');

exports.getByHostname = function(request, response) {
 	var lookupHostname = request.params.lookupHostname;

	console.log('Received requuest for an SPF lookup of ' + lookupHostname);

	request = dns.resolve(lookupHostname, 'SPF', function (err, results) {

		if(!results) {
	  	response.status = 200;
	  	response.end();
	  	console.log("No such dice.")
	  	return;
		}

	  console.log(results);
	  response.status = 200;
	  response.end(results);
	  
	  // results.forEach(function (result) {
	  // 	response.status = 200;
	  // 	response.end(result);
	  //   console.log(result);
	  // });
	});

	// var question = dns.Question({
	//   name: lookupHostname,
	//   type: 'TXT'
	// });

	// var req = dns.Request({
	//   question: question,
	//   server: { address: '8.8.8.8', port: 53, type: 'tcp' },
	//   timeout: 10000,
	//   cache: false
	// });

	// req.on('timeout', function () {
	//   console.log('Timeout in making request');
	// });

	// req.on('message', function (err, answer) {
	//   answer.answer.forEach(function (a) {
	//   	console.log(a);
	//   	response.status = 200;
	//   	response.end(a);
	//   });
	// });

	// req.on('end', function () {
	//   var delta = (Date.now()) - start;
	//   console.log('Finished processing request: ' + delta.toString() + 'ms');
	// });
};