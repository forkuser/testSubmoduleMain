let child_process = require('child_process');
let { mLog, log } = require('./log.js');
const options = {
	cwd: process.cwd()
};
module.exports = function (shellCommand) {
	log(shellCommand);
	return new Promise((reslove, reject) => {
		child_process.exec(shellCommand, options, function (error, stdout, stderr) {
			mLog(error, stdout, stderr);
			if (error) {
				reject(error);
				return;
			}
			reslove({ stdout, stderr });
		});
	});
}
