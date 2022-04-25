"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var configuration = {
    extends: [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:jsx-a11y/recommended",
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
        "react/no-children-prop": "off",
        "react/no-unused-prop-types": "off",
        "react-hooks/exhaustive-deps": "off",
        "react/require-default-props": "off",
        "react/jsx-props-no-spreading": "off",
        "jsx-a11y/tabindex-no-positive": "off",
        "react/jsx-no-useless-fragment": "off",
        "jsx-a11y/label-has-associated-control": "off",
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
        ],
        "jsx-a11y/anchor-is-valid": [
            "error",
            {
                "specialLink": ["to"],
                "aspects": ["noHref"],
                "components": ["Link"]
            }
        ]
    }
};
module.exports = configuration;
