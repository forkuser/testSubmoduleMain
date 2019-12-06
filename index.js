function getBranchName(branch) {
	let reg = /^(\*\s*)(.*)/;
	branch = branch.trim();
	branch = branch.replace(reg, function (a, b, c) {
		return c;
	});
	return branch;
}

console.log(getBranchName(' * asdasd '))