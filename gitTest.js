let child_process = require('child_process');

const options = {

};
child_process.exec('git pull', options, function (error, stdout, stderr) {
	if (error !== null) {
		console.log('exec error: ' + error);
	} else {
		console.log(stdout);
	}
});
