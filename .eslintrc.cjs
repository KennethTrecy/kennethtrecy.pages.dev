module.exports = {
	"parserOptions": {
		"ecmaVersion": 2015,
		"sourceType": "module",
		"project": [
			"tsconfig.json"
		],
		"tsconfigRootDir": __dirname,
		"extraFileExtensions": [ ".svelte" ]
	},
	"ignorePatterns": [ ".eslintrc.cjs", "src/hooks.server.js" ],
	"env": {
		"browser": true,
		"es6": true,
		"node": true
	},
	"plugins": [
		"@typescript-eslint"
	],
	"parser": "@typescript-eslint/parser",
	"overrides": [
		{
			"files": [
				"*.svelte"
			],
			"parser": "svelte-eslint-parser",
			"parserOptions": {
				"parser": "@typescript-eslint/parser",
			}
		}
	],
	"extends": [
		"eslint:all",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:svelte/recommended",
		"whitelistyle"
	],
	"rules": {
		"init-declarations": [ "off" ],
		"sort-imports": [ "off" ],
		"max-len": [ "off" ],
		"max-lines": [ "warn" ],
		"no-undefined": [ "off" ],
		"no-undef-init": [ "off" ],
		"@typescript-eslint/restrict-template-expressions": [ "off" ]
	}
}
