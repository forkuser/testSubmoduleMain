const handleList = [];
const addHandle = function (fn) {
	handleList.push(fn);
};


const start = function () {
	let i = 0;
	const next = function () {
		let fn = handleList[i];
		if (fn) {
			i++;
			fn(next);
		}
	};
	next();
};
module.exports = {
	start,
	addHandle
};
