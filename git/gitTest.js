let connect = require('./lib/connect');
let branch = require('./branch');
let shellFn = require('./lib/shell');
branch(connect, shellFn);

connect.start();
