let { log } = require('./log.js');
let shellFn = require('./shell.js');

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

// 找到当前分支
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

// 获取分支名称
function getBranchName(branch) {
	let reg = /^(\*\s*)(.*)/;
	branch = branch.trim();
	branch = branch.replace(reg, function (a, b, c) {
		return c;
	});
	return branch;
}

// 获取到分支列表
function getLocalBranch() {
	let shellCommand = 'git branch';
	return shellFn(shellCommand).then(({ stdout, stderr }) => {
		return getBranchList(stdout);
	});
}



// 分支是否存在
async function isBranchExist(branch) {
	let branchList = await getLocalBranch();
	for (let i = 0; i < branchList.length; i++) {
		let curBranch = getBranchName(branchList[i]);
		if (branch === curBranch) {
			return true;
		}
	}
	return false;
}

// 是否是当前分支
async function isCurrentBranch(branch) {
	let branchList = await getLocalBranch();
	let currentBranch = await getCurrentBranch(branchList);
	if (branch === currentBranch) {
		return true;
	}
	return false;
}

function createBranch(branch, renoteBranch) {
	let shellCommand = `git branch ${branch} ${renoteBranch || ''}`;
	return shellFn(shellCommand);
}

// 切换分支
function checkoutBranch(branch) {
	let shellCommand = `git checkout ${branch}`;
	return shellFn(shellCommand);
}

function gitPull(renoteBranch) {
	let origin = '';
	let branch = '';
	if (renoteBranch) {
		let list = renoteBranch.split('/');
		origin = list[0];
		branch = list[1];
	}
	let shellCommand = `git pull ${origin} ${branch}`;
	return shellFn(shellCommand);
}

async function checkoutToBranch(branch, renoteBranch) {
	let isCurrent = await isCurrentBranch(branch);
	if (!isCurrent) {
		let isExist = await isBranchExist(branch);
		if (!isExist) {
			await createBranch(branch, renoteBranch);
		}
		await checkoutBranch(branch);
	}
	await gitPull(renoteBranch);
}


module.exports = function (connect) {
	connect.addHandle(async function (connect) {
		await checkoutToBranch('dev', 'origin/master');
		connect();
	});
}
