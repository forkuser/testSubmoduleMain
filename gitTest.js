let fs = require('fs');
let child_process = require('child_process');
let sd = require('silly-datetime');

const argv = process.argv

if (argv.length <= 2) {
	console.log("请指定目标地址!--->例如:node gitpull.js 'D:\\xxx\\xxxx' ")
	return
}
const githref = argv[2]

if (argv.length <= 3) {
	console.log("请指定脚本执行间隔时间!--->例如：60s 则输入:node gitpull.js 'D:\\xxx\\xxxx'  60")
	return
}
const looptime = argv[3]

const timeout = setInterval(() => {
	let time = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
	child_process.exec('git pull', { cwd: githref }, function (error, stdout, stderr) {
		if (error !== null) {
			console.log('exec error: ' + error);
		} else {
			console.log(time + ' ' + stdout)
			// console.log(stdout)
		}
	});
}, looptime * 1000)
