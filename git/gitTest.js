let connect = require('./connect');
let child_process = require('child_process');
let log = require('./color');
let branch = require('./branch');

branch(connect);
// connect.addHandle(function (next) {
// 	let shellCommand = 'git pull origin master';
// 	log(shellCommand);
// 	child_process.exec(shellCommand, options, function (error, stdout, stderr) {
// 		mLog(error, stdout, stderr);
// 		if (!error) {
// 			next();
// 		}
// 	});
// });

// connect.addHandle(function (next) {
// 	let shellCommand = 'git push';
// 	log(shellCommand);
// 	child_process.exec(shellCommand, options, function (error, stdout, stderr) {
// 		mLog(error, stdout, stderr);
// 		if (!error) {
// 			next();
// 		}
// 	});
// });

connect.start();
