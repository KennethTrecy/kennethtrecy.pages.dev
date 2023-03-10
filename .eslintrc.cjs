module.exports = {
	"parserOptions": {
		"ecmaVersion": 2015,
		"sourceType": "module",
		"project": [
			"tsconfig.json"
		],
		"tsconfigRootDir": __dirname
	},
	"ignorePatterns": [ ".eslintrc.cjs" ],
	"env": {
		"browser": true,
		"es6": true,
		"node": true
	},
	"plugins": [
		"svelte3",
		"@typescript-eslint"
	],
	"parser": "@typescript-eslint/parser",
	"overrides": [
		{
			"files": [
				"*.svelte"
			],
			"processor": "svelte3/svelte3"
		}
	],
	"settings": {
		"svelte3/typescript": true
	},
	"extends": [
		"eslint:all",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"whitelistyle"
	]
}
