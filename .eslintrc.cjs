module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	//  NEW - eslint ne gere pas le app.d.ts (global types)
	globals: {
		I_DB_CONFIG: 'writable',
		T_GLOBALS: 'writable',
		T_GLOBAL_ENTITIES: 'writable',
		T_GLOBAL_DTOS: 'writable',
		I_ENTITY__post: 'writable',
		I_ENTITY__event: 'writable',
		I_ENTITY__uiinputValue: 'writable',
		I_ENTITY: 'writable',
		I_DTO__post: 'writable',
		I_DTO__event: 'writable',
		I_DTO__uiInputValue: 'writable',
		I_ui__menu: 'writable',
		T_ui__dynvariant: 'writable'
	},
	rules: {
		// 'require-await': 'error',
		// ---
		// CALMER TYPAGE 1
		// ---
		'@typescript-eslint/no-explicit-any': 0 // TODO - remettre pour parfaire
		// ---
		// "require-jsdoc ": 0,
		// "valid-jsdoc": 0,
		// "max-len": 0
		// 'object-curly-newline': [
		// 	'all',
		// 	{
		// 		ObjectExpression: 'always',
		// 		ObjectPattern: { multiline: true },
		// 		ImportDeclaration: 'never',
		// 		ExportDeclaration: { multiline: true, minProperties: 3 }
		// 	}
		// ],
		// curly: 'all'
		// 'brace-style': ['error', 'Stroustrup']
	}
};
