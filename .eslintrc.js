module.exports = {
    "env": {
        "mocha": true,
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2015,
        "sourceType": "module"
    },
    "rules": {
        "accessor-pairs": "error",
        "array-bracket-newline": "off",
        "array-bracket-spacing": [
            "error",
            "never"
        ],
        "array-callback-return": "off",
        "array-element-newline": "off",
        "arrow-body-style": "error",
        "arrow-parens": [
            "error",
            "as-needed"
        ],
        "arrow-spacing": [
            "error",
            {
                "after": true,
                "before": true
            }
        ],
        "block-scoped-var": "off",
        "block-spacing": [
            "error",
            "always"
        ],
        "brace-style": [
            "error",
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],
        "callback-return": "error",
        "camelcase": "off",
        "capitalized-comments": "off",
        "class-methods-use-this": "off",
        "comma-dangle": "error",
        "comma-spacing": "off",
        "comma-style": [
            "error",
            "last"
        ],
        "complexity": "off",
        "computed-property-spacing": "off",
        "consistent-return": "off",
        "consistent-this": "off",
        "curly": "off",
        "default-case": "error",
        "dot-location": [
            "error",
            "property"
        ],
        "dot-notation": "off",
        "eol-last": "off",
        "eqeqeq": "off",
        "func-call-spacing": "off",
        "func-name-matching": "off",
        "func-names": "off",
        "func-style": "off",
        "function-paren-newline": "error",
        "generator-star-spacing": "error",
        "global-require": "error",
        "guard-for-in": "off",
        "handle-callback-err": "error",
        "id-blacklist": "error",
        "id-length": "off",
        "id-match": "error",
        "implicit-arrow-linebreak": [
            "error",
            "beside"
        ],
        "indent": "off",
        "indent-legacy": "off",
        "init-declarations": "off",
        "jsx-quotes": "error",
        "key-spacing": "error",
        "keyword-spacing": "off",
        "line-comment-position": "off",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "lines-around-comment": "error",
        "lines-around-directive": "off",
        "lines-between-class-members": "off",
        "max-classes-per-file": "off",
        "max-depth": "off",
        "max-len": "off",
        "max-lines": "off",
        "max-lines-per-function": "off",
        "max-nested-callbacks": "error",
        "max-params": "off",
        "max-statements": "off",
        "max-statements-per-line": "off",
        "multiline-comment-style": [
            "error",
            "separate-lines"
        ],
        "multiline-ternary": "off",
        "new-parens": "error",
        "newline-after-var": "off",
        "newline-before-return": "off",
        "newline-per-chained-call": "off",
        "no-alert": "off",
        "no-array-constructor": "error",
        "no-await-in-loop": "error",
        "no-bitwise": "off",
        "no-buffer-constructor": "error",
        "no-caller": "error",
        "no-catch-shadow": "off",
        "no-confusing-arrow": "error",
        "no-continue": "off",
        "no-div-regex": "error",
        "no-duplicate-imports": "error",
        "no-else-return": [
            "error",
            {
                "allowElseIf": true
            }
        ],
        "no-empty-function": "off",
        "no-eq-null": "off",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-extra-parens": "off",
        "no-floating-decimal": "off",
        "no-implicit-coercion": [
            "error",
            {
                "boolean": false,
                "number": false,
                "string": false
            }
        ],
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-inline-comments": "off",
        "no-inner-declarations": [
            "error",
            "functions"
        ],
        "no-invalid-this": "off",
        "no-iterator": "error",
        "no-label-var": "off",
        "no-labels": "off",
        "no-lone-blocks": "off",
        "no-lonely-if": "error",
        "no-loop-func": "off",
        "no-magic-numbers": "off",
        "no-mixed-operators": "off",
        "no-mixed-requires": "error",
        "no-multi-assign": "off",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-multiple-empty-lines": "off",
        "no-native-reassign": "error",
        "no-negated-condition": "off",
        "no-negated-in-lhs": "error",
        "no-nested-ternary": "off",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-require": "error",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "off",
        "no-path-concat": "error",
        "no-plusplus": "off",
        "no-process-env": "error",
        "no-process-exit": "error",
        "no-proto": "off",
        "no-prototype-builtins": "off",
        "no-restricted-globals": "error",
        "no-restricted-imports": "error",
        "no-restricted-modules": "error",
        "no-restricted-properties": "error",
        "no-restricted-syntax": "error",
        "no-return-assign": "off",
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-assign": [
            "error",
            {
                "props": false
            }
        ],
        "no-self-compare": "off",
        "no-sequences": "off",
        "no-shadow": "off",
        "no-shadow-restricted-names": "error",
        "no-spaced-func": "off",
        "no-sync": "error",
        "no-tabs": "off",
        "no-template-curly-in-string": "error",
        "no-ternary": "off",
        "no-throw-literal": "error",
        "no-trailing-spaces": "off",
        "no-undef-init": "error",
        "no-undefined": "off",
        "no-underscore-dangle": "off",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": [
            "error",
            {
                "defaultAssignment": true
            }
        ],
        "no-unused-expressions": "off",
        "no-use-before-define": "off",
        "no-useless-call": "off",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "off",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "off",
        "no-void": "off",
        "no-warning-comments": "error",
        "no-whitespace-before-property": "error",
        "no-with": "error",
        "nonblock-statement-body-position": "error",
        "object-curly-newline": "error",
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "object-property-newline": "off",
        "object-shorthand": "off",
        "one-var": "off",
        "one-var-declaration-per-line": [
            "error",
            "initializations"
        ],
        "operator-assignment": [
            "error",
            "always"
        ],
        "operator-linebreak": "off",
        "padded-blocks": "off",
        "padding-line-between-statements": "error",
        "prefer-arrow-callback": "off",
        "prefer-const": "off",
        "prefer-destructuring": "off",
        "prefer-numeric-literals": "error",
        "prefer-object-spread": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-reflect": "off",
        "prefer-rest-params": "off",
        "prefer-spread": "off",
        "prefer-template": "off",
        "quote-props": "off",
        "quotes": "off",
        "radix": [
            "error",
            "always"
        ],
        "require-await": "error",
        "require-jsdoc": "off",
        "rest-spread-spacing": "error",
        "semi": "off",
        "semi-spacing": "off",
        "semi-style": [
            "error",
            "last"
        ],
        "sort-imports": "off",
        "sort-keys": "off",
        "sort-vars": "off",
        "space-before-blocks": "off",
        "space-before-function-paren": "off",
        "space-in-parens": [
            "error",
            "never"
        ],
        "space-infix-ops": "off",
        "space-unary-ops": [
            "error",
            {
                "nonwords": false,
                "words": true
            }
        ],
        "spaced-comment": "off",
        "strict": "off",
        "switch-colon-spacing": "error",
        "symbol-description": "error",
        "template-curly-spacing": [
            "error",
            "never"
        ],
        "template-tag-spacing": "error",
        "unicode-bom": [
            "error",
            "never"
        ],
        "valid-jsdoc": "off",
        "vars-on-top": "off",
        "wrap-iife": "off",
        "wrap-regex": "off",
        "yield-star-spacing": "error",
        "yoda": "off"
    }
};