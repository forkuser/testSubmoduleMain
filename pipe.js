const pipeList = [];
const addHandleNode = function (fn) {
	pipeList.push(fn);
}


const startPipe = function () {
	let i = 0;
	const next = function () {
		let startFn = pipeList[i];
		if (startFn) {
			i++;
			startFn(next);
		}
	}
	next();
}
module.exports = {
	startPipe,
	addHandleNode
};
