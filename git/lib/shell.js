let child_process = require('child_process');
let { mLog, log } = require('./log.js');
const options = {
	cwd: process.cwd()
};
module.exports = function (shellCommand, opt) {
	log(shellCommand);
	let resultOpt = Object.assign({}, options, opt);
	return new Promise((resolve, reject) => {
		child_process.exec(shellCommand, resultOpt, function (error, stdout, stderr) {
			mLog(error, stdout, stderr);
			if (error) {
				reject(error);
				return;
			}
			resolve({ stdout, stderr });
		});
	});
};
