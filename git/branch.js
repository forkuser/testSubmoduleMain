const { checkoutToBranch } = require('./lib/branch');
module.exports = function (connect, shellFn) {
	connect.addHandle(async function (connect) {
		await checkoutToBranch('dev', 'origin/master', shellFn);
		connect();
	});
};
