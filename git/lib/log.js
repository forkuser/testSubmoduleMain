let log = require('./color.js');

function mLog(error, stdout, stderr) {
	if (error !== null) {
		log(error, 'red');
		return;
	} else {
		log(stdout);
		log(stderr, 'blue');
	}
	log('-----------------------', 'green');
}

module.exports = {
	log,
	mLog
};
