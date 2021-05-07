module.exports = {
	extends: [
		"airbnb-typescript",
		"@oly_op",
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
		"jsx-a11y/media-has-caption": "off",
		"react/no-unused-prop-types": "off",
		"react-hooks/exhaustive-deps": "off",
		"react/require-default-props": "off",
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-props-no-spreading": "off",
		"react/jsx-indent-props": ["error", "tab"],
		"react/jsx-fragments": ["error", "element"],
		"jsx-a11y/click-events-have-key-events": "off",
		"jsx-a11y/label-has-associated-control": "off",
		"jsx-a11y/control-has-associated-label": "off",
		"jsx-a11y/no-static-element-interactions": "off",
		"react/jsx-no-duplicate-props": ["error", { ignoreCase: false }],
		"react/jsx-tag-spacing": ["error", { beforeSelfClosing: "never" }],
	}
}