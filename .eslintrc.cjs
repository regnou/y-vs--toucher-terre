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
		// GENERATOR ADMIN
		I_megaconfig__cms: 'writable',
		I_firestoreDocument__config: 'writable',
		//
		// DOMAIN
		T_pageItemStore: 'writable',
		I_ENTITY__event: 'writable',
		I_ENTITY__post: 'writable',
		//
		// UI
		I_UI__inputValue: 'writable',
		I_UI__factoryItem: 'writable',
		T_ui__dynvar: 'writable',
		I_ui__menu: 'writable'
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
