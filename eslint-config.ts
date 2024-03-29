import type { TSESLint } from "@typescript-eslint/utils";

const configuration: TSESLint.Linter.ConfigType = {
	plugins: ["jsx-a11y", "react-hooks"],
	extends: ["airbnb", "airbnb-typescript", "airbnb/hooks", "plugin:jsx-a11y/strict", "plugin:react-hooks/recommended"],
	parserOptions: {
		project: "./tsconfig.eslint.json",
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			pragma: "createElement",
		},
	},
	rules: {
		"react/prop-types": "off",
		"react/no-children-prop": "off",
		"react/no-unused-prop-types": "off",
		"react-hooks/exhaustive-deps": "off",
		"react/require-default-props": "off",
		"react/jsx-props-no-spreading": "off",
		"jsx-a11y/tabindex-no-positive": "off",
		"react/jsx-no-useless-fragment": "off",
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-indent-props": ["error", "tab"],
		"react/jsx-fragments": ["error", "element"],
		"react/jsx-key": [
			"error",
			{
				"warnOnDuplicates": true,
			},
		],
		"react/no-unstable-nested-components": [
			"error",
			{
				"allowAsProps": true,
			},
		],
		"react/function-component-definition": [
			"error",
			{
				"namedComponents": "arrow-function",
			},
		],
		"react/jsx-tag-spacing": [
			"error",
			{
				"beforeSelfClosing": "never",
			},
		],
		"jsx-a11y/anchor-is-valid": [
			"error",
			{
				"specialLink": ["to"],
				"aspects": ["noHref"],
				"components": ["Link"],
			},
		],
	},
};

export default configuration;
