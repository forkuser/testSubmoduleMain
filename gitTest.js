let pipe = require('./pipe');
let child_process = require('child_process');

const options = {

};

pipe.addHandleNode(function (next) {
	child_process.exec('git pull origin master', options, function (error, stdout, stderr) {
		if (error !== null) {
			console.error('exec error: ' + error);
			return;
		}
		console.log(stdout);
		next();
	});
});

pipe.addHandleNode(function (next) {
	child_process.exec('git push', options, function (error, stdout, stderr) {
		if (error !== null) {
			console.error('exec error: ' + error);
			return;
		}
		console.log(stdout);
		console.log(stderr);
		next();
	});
});

pipe.startPipe();
