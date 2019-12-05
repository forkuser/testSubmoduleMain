let child_process = require('child_process');
let { mLog, log } = require('./log.js');
const options = {
	cwd: process.cwd()
};

function getBranchList(str) {
	let list = str.split('\n');
	list = list.reduce(function (prev, cur, index) {
		cur = cur.trim()
		if (cur) {
			prev.push(cur);
		}
		return prev;
	}, []);
	return list;
}

function getCurrentBranch(list) {
	let reg = /^(\*\s*)(.*)/;
	let curBranch;
	for (let i = 0; i < list.length; i++) {
		let branch = list[i];
		if (reg.test(branch)) {
			curBranch = branch;
			break;
		}
	}
	curBranch = curBranch.replace(reg, function (a, b, c) {
		return c;
	});
	return curBranch;
}

async function isBranchExist(branch) {
	let curBranch = await getLocalBranch();
	if (branch === curBranch) {
		return true;
	}
	return false;
}



function getLocalBranch() {
	let shellCommand = 'git branch';
	log(shellCommand);
	return new Promise((reslove, reject) => {
		child_process.exec(shellCommand, options, function (error, stdout, stderr) {
			mLog(error, stdout, stderr);
			if (error) {
				reject(error);
				return;
			}
			if (stdout) {
				let branchList = getBranchList(stdout);
				let branch = getCurrentBranch(branchList);
				reslove(branch);
			}
		});
	});
}

function branchs() {
	isBranchExist();
}

module.exports = function (connect) {
	connect.addHandle(branchs);
}
