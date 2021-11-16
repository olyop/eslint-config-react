module.exports = {
	extends: [
		"@oly_op",
		"airbnb",
		"airbnb/hooks",
		"airbnb-typescript"
	],
	parserOptions: {
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
		"jsx-a11y/no-autofocus": "off",
		"react/no-children-prop": "off",
		"react/no-unused-prop-types": "off",
		"jsx-a11y/media-has-caption": "off",
		"react-hooks/exhaustive-deps": "off",
		"react/require-default-props": "off",
		"react/jsx-props-no-spreading": "off",
		"react/jsx-no-useless-fragment": "off",
		"jsx-a11y/click-events-have-key-events": "off",
		"jsx-a11y/label-has-associated-control": "off",
		"jsx-a11y/control-has-associated-label": "off",
		"jsx-a11y/no-static-element-interactions": "off",
		"react/jsx-indent": [
			"error",
			"tab",
		],
		"react/jsx-indent-props": [
			"error",
			"tab",
		],
		"react/jsx-fragments": [
			"error",
			"element",
		],
		"react/no-unstable-nested-components": [
			"error",
			{
				"allowAsProps": true
			}
		],
		"react/function-component-definition": [
			"error",
			{
				"namedComponents": "arrow-function"
			}
		],
		"react/jsx-tag-spacing": [
			"error",
			{
				"beforeSelfClosing": "never"
			}
		]
	}
}