// https://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parserOptions: {
		sourceType: 'module'
	},
	env: {
		browser: true,

	},
	'globals': {
		"console": true
	},
	// https://github.com/standard/standard/blob/master/docs/RULES-en.md
	extends: 'standard',
	// add your custom rules here
	'rules': {
		// tab缩进
		'indent': 'off',
		// 单引号引用字符串
		'quotes': [
        'error',
        'single'
    ],
		// 必须使用分号结束
		'semi': [
        'error',
        'always'
    ],
		'space-before-function-paren': 0,
		'spaced-comment': 0,
		// 允许tab缩进
		'no-tabs': 'off',
		// 关闭===检测
		'eqeqeq': 'off',
		'camelcase': 'off',
		// 允许多行空行
		'no-multiple-empty-lines': 'off',
		// 允许多余空格
		'no-trailing-spaces': 'off',
		// end of file last line
		'eol-last': 'off',
		// promise reject不需要error对象
		'prefer-promise-reject-errors': 'off',
		'keyword-spacing': 0,
		'space-before-blocks': 0
	}
}
