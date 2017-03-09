/**
 * @fileoverview Configuration applied when a user configuration extends from
 * eslint:recommended.
 * @author Nicholas C. Zakas
 */

"use strict";

/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */
/**
*   Symbol Legend:
*   $ - Recommended by ESLint.
*   % - Able to be executed through the "--fix" command (Mostly).
*   & - Rules I think are good.
*   * - Rules I think are great.
*/

module.exports = {
    parser: "espree",
    ecmaFeatures: {},
    rules: {

        /* eslint-enable sort-keys */
        "accessor-pairs": "off",   // http://eslint.org/docs/rules/accessor-pairs
        "array-bracket-spacing": "off",   // %, http://eslint.org/docs/rules/array-bracket-spacing
        "array-callback-return": "off",   // &, %, http://eslint.org/docs/rules/array-callback-return
        "arrow-body-style": "off",   // &, %, http://eslint.org/docs/rules/arrow-body-style
        "arrow-parens": "off",   // &, %, http://eslint.org/docs/rules/arrow-parens
        "arrow-spacing": "off",   // &, %, http://eslint.org/docs/rules/arrow-spacing
        "block-scoped-var": "off",   // *, http://eslint.org/docs/rules/block-scoped-var
        "block-spacing": "off",   // &, %, http://eslint.org/docs/rules/block-spacing
        "brace-style": "off",   // &, %, (Stroustrup style), http://eslint.org/docs/rules/brace-style
        "callback-return": "off",   //    http://eslint.org/docs/rules/callback-return
        "camelcase": "off",   //    http://eslint.org/docs/rules/camelcase
        "capitalized-comments": "off",   //    http://eslint.org/docs/rules/capitalized-comments
        "class-methods-use-this": "off",   //    http://eslint.org/docs/rules/class-methods-use-this
        "comma-dangle": "off",   // %, http://eslint.org/docs/rules/comma-dangle
        "comma-spacing": "off",   // %, http://eslint.org/docs/rules/comma-spacing
        "comma-style": "off",   // - &, %, http://eslint.org/docs/rules/comma-style
        "complexity": "off",   //    http://eslint.org/docs/rules/complexity
        "computed-property-spacing": "off",   // - &, %, http://eslint.org/docs/rules/computed-property-spacing
        "consistent-return": "off",   //    http://eslint.org/docs/rules/consistent-return
        "consistent-this": "off",   //    http://eslint.org/docs/rules/consistent-this
        "constructor-super": "error",   // $, *, http://eslint.org/docs/rules/constructor-super
        "curly": "off",   // *, %, http://eslint.org/docs/rules/curly
        "default-case": "off",   // &, http://eslint.org/docs/rules/default-case
        "dot-location": "off",   // & (property setting), %, http://eslint.org/docs/rules/dot-location
        "dot-notation": "off",   // %, http://eslint.org/docs/rules/dot-notation
        "eol-last": "off",   // %, http://eslint.org/docs/rules/eol-last
        "eqeqeq": "off",   // &, %, http://eslint.org/docs/rules/eqeqeq
        "func-call-spacing": "off",   // %, http://eslint.org/docs/rules/func-call-spacing
        "func-name-matching": "off",   //    http://eslint.org/docs/rules/func-name-matching
        "func-names": "off",   //    http://eslint.org/docs/rules/func-names
        "func-style": "off",   // &, %, http://eslint.org/docs/rules/func-style
        "generator-star-spacing": "off",   // %, http://eslint.org/docs/rules/generator-star-spacing
        "global-require": "off",   // & (I think everyone does this already), http://eslint.org/docs/rules/global-require
        "guard-for-in": "off",   // *, http://eslint.org/docs/rules/guard-for-in
        "handle-callback-err": "off",   // &, http://eslint.org/docs/rules/handle-callback-err
        "id-blacklist": "off",   //    http://eslint.org/docs/rules/id-blacklist
        "id-length": "off",   //    http://eslint.org/docs/rules/id-length
        "id-match": "off",   //    http://eslint.org/docs/rules/id-match
        "indent": "off",   // % (Technically Beautify does this for us), http://eslint.org/docs/rules/indent
        "init-declarations": "off",   //    http://eslint.org/docs/rules/init-declarations
        "jsx-quotes": "off",   // %, http://eslint.org/docs/rules/jsx-quotes
        "key-spacing": "off",   // & {"beforeColon": false}, {"afterColon": true}, http://eslint.org/docs/rules/key-spacing
        "keyword-spacing": "off",   // %, http://eslint.org/docs/rules/keyword-spacing
        "line-comment-position": "off",   //    http://eslint.org/docs/rules/line-comment-position
        "linebreak-style": "off",   //    http://eslint.org/docs/rules/linebreak-style
        "lines-around-comment": "off",   // %, http://eslint.org/docs/rules/lines-around-comment
        "lines-around-directive": "off",   // %, http://eslint.org/docs/rules/lines-around-directive
        "max-depth": "off",   //    http://eslint.org/docs/rules/max-depth
        "max-len": "off",   //    http://eslint.org/docs/rules/max-len
        "max-lines": "off",   //    http://eslint.org/docs/rules/max-lines
        "max-nested-callbacks": "off",   //    http://eslint.org/docs/rules/max-nested-callbacks
        "max-params": "off",   //    http://eslint.org/docs/rules/max-params
        "max-statements": "off",   //    http://eslint.org/docs/rules/max-statements
        "max-statements-per-line": "off",   //    http://eslint.org/docs/rules/max-statements-per-line
        "multiline-ternary": "off",   //    http://eslint.org/docs/rules/multiline-ternary
        "new-cap": "off",   // * (Good rule, but does anyone not do it this way?), http://eslint.org/docs/rules/new-cap
        "new-parens": "off",   // & (same as above), http://eslint.org/docs/rules/new-parens
        "newline-after-var": "off",   // %, http://eslint.org/docs/rules/newline-after-var
        "newline-before-return": "off",   // %, http://eslint.org/docs/rules/newline-before-return
        "newline-per-chained-call": "off",   //    http://eslint.org/docs/rules/newline-per-chained-call
        "no-alert": "off",   //    http://eslint.org/docs/rules/no-alert
        "no-array-constructor": "off",   //    http://eslint.org/docs/rules/no-array-constructor
        "no-await-in-loop": "off",   //    http://eslint.org/docs/rules/no-await-in-loop
        "no-bitwise": "off",   //    http://eslint.org/docs/rules/no-bitwise
        "no-caller": "off",   //    http://eslint.org/docs/rules/no-caller
        "no-case-declarations": "error",   // *, $, http://eslint.org/docs/rules/no-case-declarations
        "no-catch-shadow": "off",   //    http://eslint.org/docs/rules/no-catch-shadow
        "no-class-assign": "error",   // $, http://eslint.org/docs/rules/no-class-assign
        "no-compare-neg-zero": "off",   //    http://eslint.org/docs/rules/no-compare-neg-zero
        "no-cond-assign": "error",   // *, $, http://eslint.org/docs/rules/no-cond-assign
        "no-confusing-arrow": "off",   //    http://eslint.org/docs/rules/no-confusing-arrow
        "no-console": "error",   //    http://eslint.org/docs/rules/no-console
        "no-const-assign": "error",   // *, $, http://eslint.org/docs/rules/no-const-assign
        "no-constant-condition": "error",   //    http://eslint.org/docs/rules/no-constant-condition
        "no-continue": "off",   //    http://eslint.org/docs/rules/no-continue
        "no-control-regex": "error",   //    http://eslint.org/docs/rules/no-control-regex
        "no-debugger": "error",   //    http://eslint.org/docs/rules/no-debugger
        "no-delete-var": "error",   //    http://eslint.org/docs/rules/no-delete-var
        "no-div-regex": "off",   //    http://eslint.org/docs/rules/no-div-regex
        "no-dupe-args": "error",   //    http://eslint.org/docs/rules/no-dupe-args
        "no-dupe-class-members": "error",   //    http://eslint.org/docs/rules/no-dupe-class-members
        "no-dupe-keys": "error",   //    http://eslint.org/docs/rules/no-dupe-keys
        "no-duplicate-case": "error",   //    http://eslint.org/docs/rules/no-duplicate-case
        "no-duplicate-imports": "off",   //    http://eslint.org/docs/rules/no-duplicate-imports
        "no-else-return": "off",   //    http://eslint.org/docs/rules/no-else-return
        "no-empty": "error",   //    http://eslint.org/docs/rules/no-empty
        "no-empty-character-class": "error",   //    http://eslint.org/docs/rules/no-empty-character-class
        "no-empty-function": "off",   //    http://eslint.org/docs/rules/no-empty-function
        "no-empty-pattern": "error",   //    http://eslint.org/docs/rules/no-empty-pattern
        "no-eq-null": "off",   //    http://eslint.org/docs/rules/no-eq-null
        "no-eval": "off",   //    http://eslint.org/docs/rules/no-eval
        "no-ex-assign": "error",   //    http://eslint.org/docs/rules/no-ex-assign
        "no-extend-native": "off",   //    http://eslint.org/docs/rules/no-extend-native
        "no-extra-bind": "off",   //    http://eslint.org/docs/rules/no-extra-bind
        "no-extra-boolean-cast": "error",   //    http://eslint.org/docs/rules/no-extra-boolean-cast
        "no-extra-label": "off",   //    http://eslint.org/docs/rules/no-extra-label
        "no-extra-parens": "off",   //    http://eslint.org/docs/rules/no-extra-parens
        "no-extra-semi": "error",   //    http://eslint.org/docs/rules/no-extra-semi
        "no-fallthrough": "error",   //    http://eslint.org/docs/rules/no-fallthrough
        "no-floating-decimal": "off",   //    http://eslint.org/docs/rules/no-floating-decimal
        "no-func-assign": "error",   //    http://eslint.org/docs/rules/no-func-assign
        "no-global-assign": "error",   //    http://eslint.org/docs/rules/no-global-assign
        "no-implicit-coercion": "off",   //    http://eslint.org/docs/rules/no-implicit-coercion
        "no-implicit-globals": "off",   //    http://eslint.org/docs/rules/no-implicit-globals
        "no-implied-eval": "off",   //    http://eslint.org/docs/rules/no-implied-eval
        "no-inline-comments": "off",   //    http://eslint.org/docs/rules/no-inline-comments
        "no-inner-declarations": "error",   //    http://eslint.org/docs/rules/no-inner-declarations
        "no-invalid-regexp": "error",   //    http://eslint.org/docs/rules/no-invalid-regexp
        "no-invalid-this": "off",   //    http://eslint.org/docs/rules/no-invalid-this
        "no-irregular-whitespace": "error",   //    http://eslint.org/docs/rules/no-irregular-whitespace
        "no-iterator": "off",   //    http://eslint.org/docs/rules/no-iterator
        "no-label-var": "off",   //    http://eslint.org/docs/rules/no-label-var
        "no-labels": "off",   //    http://eslint.org/docs/rules/no-labels
        "no-lone-blocks": "off",   //    http://eslint.org/docs/rules/no-lone-blocks
        "no-lonely-if": "off",   //    http://eslint.org/docs/rules/no-lonely-if
        "no-loop-func": "off",   //    http://eslint.org/docs/rules/no-loop-func
        "no-magic-numbers": "off",   //    http://eslint.org/docs/rules/no-magic-numbers
        "no-mixed-operators": "off",   //    http://eslint.org/docs/rules/no-mixed-operators
        "no-mixed-requires": "off",   //    http://eslint.org/docs/rules/no-mixed-requires
        "no-mixed-spaces-and-tabs": "error",   //    http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
        "no-multi-assign": "off",   //    http://eslint.org/docs/rules/no-multi-assign
        "no-multi-spaces": "off",   //    http://eslint.org/docs/rules/no-multi-spaces
        "no-multi-str": "off",   //    http://eslint.org/docs/rules/no-multi-str
        "no-multiple-empty-lines": "off",   //    http://eslint.org/docs/rules/no-multiple-empty-lines
        "no-native-reassign": "off",   //    http://eslint.org/docs/rules/no-native-reassign
        "no-negated-condition": "off",   //    http://eslint.org/docs/rules/no-negated-condition
        "no-negated-in-lhs": "off",   //    http://eslint.org/docs/rules/no-negated-in-lhs
        "no-nested-ternary": "off",   //    http://eslint.org/docs/rules/no-nested-ternary
        "no-new": "off",   //    http://eslint.org/docs/rules/no-new
        "no-new-func": "off",   //    http://eslint.org/docs/rules/no-new-func
        "no-new-object": "off",   //    http://eslint.org/docs/rules/no-new-object
        "no-new-require": "off",   //    http://eslint.org/docs/rules/no-new-require
        "no-new-symbol": "error",   //    http://eslint.org/docs/rules/no-new-symbol
        "no-new-wrappers": "off",   //    http://eslint.org/docs/rules/no-new-wrappers
        "no-obj-calls": "error",   //    http://eslint.org/docs/rules/no-obj-calls
        "no-octal": "error",   //    http://eslint.org/docs/rules/no-octal
        "no-octal-escape": "off",   //    http://eslint.org/docs/rules/no-octal-escape
        "no-param-reassign": "off",   //    http://eslint.org/docs/rules/no-param-reassign
        "no-path-concat": "off",   //    http://eslint.org/docs/rules/no-path-concat
        "no-plusplus": "off",   //    http://eslint.org/docs/rules/no-plusplus
        "no-process-env": "off",   //    http://eslint.org/docs/rules/no-process-env
        "no-process-exit": "off",   //    http://eslint.org/docs/rules/no-process-exit
        "no-proto": "off",   //    http://eslint.org/docs/rules/no-proto
        "no-prototype-builtins": "off",   //    http://eslint.org/docs/rules/no-prototype-builtins
        "no-redeclare": "error",   //    http://eslint.org/docs/rules/no-redeclare
        "no-regex-spaces": "error",   //    http://eslint.org/docs/rules/no-regex-spaces
        "no-restricted-globals": "off",   //    http://eslint.org/docs/rules/no-restricted-globals
        "no-restricted-imports": "off",   //    http://eslint.org/docs/rules/no-restricted-imports
        "no-restricted-modules": "off",   //    http://eslint.org/docs/rules/no-restricted-modules
        "no-restricted-properties": "off",   //    http://eslint.org/docs/rules/no-restricted-properties
        "no-restricted-syntax": "off",   //    http://eslint.org/docs/rules/no-restricted-syntax
        "no-return-assign": "off",   //    http://eslint.org/docs/rules/no-return-assign
        "no-return-await": "off",   //    http://eslint.org/docs/rules/no-return-await
        "no-script-url": "off",   //    http://eslint.org/docs/rules/no-script-url
        "no-self-assign": "error",   //    http://eslint.org/docs/rules/no-self-assign
        "no-self-compare": "off",   //    http://eslint.org/docs/rules/no-self-compare
        "no-sequences": "off",   //    http://eslint.org/docs/rules/no-sequences
        "no-shadow": "off",   //    http://eslint.org/docs/rules/no-shadow
        "no-shadow-restricted-names": "off",   //    http://eslint.org/docs/rules/no-shadow-restricted-names
        "no-spaced-func": "off",   //    http://eslint.org/docs/rules/no-spaced-func
        "no-sparse-arrays": "error",   //    http://eslint.org/docs/rules/no-sparse-arrays
        "no-sync": "off",   //    http://eslint.org/docs/rules/no-sync
        "no-tabs": "off",   //    http://eslint.org/docs/rules/no-tabs
        "no-template-curly-in-string": "off",   //    http://eslint.org/docs/rules/no-template-curly-in-string
        "no-ternary": "off",   //    http://eslint.org/docs/rules/no-ternary
        "no-this-before-super": "error",   //    http://eslint.org/docs/rules/no-this-before-super
        "no-throw-literal": "off",   //    http://eslint.org/docs/rules/no-throw-literal
        "no-trailing-spaces": "off",   //    http://eslint.org/docs/rules/no-trailing-spaces
        "no-undef": "error",   //    http://eslint.org/docs/rules/no-undef
        "no-undef-init": "off",   //    http://eslint.org/docs/rules/no-undef-init
        "no-undefined": "off",   //    http://eslint.org/docs/rules/no-undefined
        "no-underscore-dangle": "off",   //    http://eslint.org/docs/rules/no-underscore-dangle
        "no-unexpected-multiline": "error",   //    http://eslint.org/docs/rules/no-unexpected-multiline
        "no-unmodified-loop-condition": "off",   //    http://eslint.org/docs/rules/no-unmodified-loop-condition
        "no-unneeded-ternary": "off",   //    http://eslint.org/docs/rules/no-unneeded-ternary
        "no-unreachable": "error",   //    http://eslint.org/docs/rules/no-unreachable
        "no-unsafe-finally": "error",   //    http://eslint.org/docs/rules/no-unsafe-finally
        "no-unsafe-negation": "error",   //    http://eslint.org/docs/rules/no-unsafe-negation
        "no-unused-expressions": "off",   //    http://eslint.org/docs/rules/no-unused-expressions
        "no-unused-labels": "error",   //    http://eslint.org/docs/rules/no-unused-labels
        "no-unused-vars": "error",   //    http://eslint.org/docs/rules/no-unused-vars
        "no-use-before-define": "off",   //    http://eslint.org/docs/rules/no-use-before-define
        "no-useless-call": "off",   //    http://eslint.org/docs/rules/no-useless-call
        "no-useless-computed-key": "off",   //    http://eslint.org/docs/rules/no-useless-computed-key
        "no-useless-concat": "off",   //    http://eslint.org/docs/rules/no-useless-concat
        "no-useless-constructor": "off",   //    http://eslint.org/docs/rules/no-useless-constructor
        "no-useless-escape": "off",   //    http://eslint.org/docs/rules/no-useless-escape
        "no-useless-rename": "off",   //    http://eslint.org/docs/rules/no-useless-rename
        "no-useless-return": "off",   //    http://eslint.org/docs/rules/no-useless-return
        "no-var": "off",   //    http://eslint.org/docs/rules/no-var
        "no-void": "off",   //    http://eslint.org/docs/rules/no-void
        "no-warning-comments": "off",   //    http://eslint.org/docs/rules/no-warning-comments
        "no-whitespace-before-property": "off",   //    http://eslint.org/docs/rules/no-whitespace-before-property
        "no-with": "off",   //    http://eslint.org/docs/rules/no-with
        "nonblock-statement-body-position": "off",   //    http://eslint.org/docs/rules/nonblock-statement-body-position
        "object-curly-newline": "off",   //    http://eslint.org/docs/rules/object-curly-newline
        "object-curly-spacing": ["off", "never"],
        "object-property-newline": "off",   //    http://eslint.org/docs/rules/object-property-newline
        "object-shorthand": "off",   //    http://eslint.org/docs/rules/object-shorthand
        "one-var": "off",   //    http://eslint.org/docs/rules/one-var
        "one-var-declaration-per-line": "off",   //    http://eslint.org/docs/rules/one-var-declaration-per-line
        "operator-assignment": "off",   //    http://eslint.org/docs/rules/operator-assignment
        "operator-linebreak": "off",   //    http://eslint.org/docs/rules/operator-linebreak
        "padded-blocks": "off",   //    http://eslint.org/docs/rules/padded-blocks
        "prefer-arrow-callback": "off",   //    http://eslint.org/docs/rules/prefer-arrow-callback
        "prefer-const": "off",   //    http://eslint.org/docs/rules/prefer-const
        "prefer-destructuring": "off",   //    http://eslint.org/docs/rules/prefer-destructuring
        "prefer-numeric-literals": "off",   //    http://eslint.org/docs/rules/prefer-numeric-literals
        "prefer-promise-reject-errors": "off",   //    http://eslint.org/docs/rules/prefer-promise-reject-errors
        "prefer-reflect": "off",   //    http://eslint.org/docs/rules/prefer-reflect
        "prefer-rest-params": "off",   //    http://eslint.org/docs/rules/prefer-rest-params
        "prefer-spread": "off",   //    http://eslint.org/docs/rules/prefer-spread
        "prefer-template": "off",   //    http://eslint.org/docs/rules/prefer-template
        "quote-props": "off",   //    http://eslint.org/docs/rules/quote-props
        "quotes": "off",   //    http://eslint.org/docs/rules/quotes
        "radix": "off",   //    http://eslint.org/docs/rules/radix
        "require-await": "off",   //    http://eslint.org/docs/rules/require-await
        "require-jsdoc": "off",   //    http://eslint.org/docs/rules/require-jsdoc
        "require-yield": "error",   //    http://eslint.org/docs/rules/require-yield
        "rest-spread-spacing": "off",   //    http://eslint.org/docs/rules/rest-spread-spacing
        "semi": "off",   //    http://eslint.org/docs/rules/semi
        "semi-spacing": "off",   //    http://eslint.org/docs/rules/semi-spacing
        "sort-imports": "off",   //    http://eslint.org/docs/rules/sort-imports
        "sort-keys": "off",   //    http://eslint.org/docs/rules/sort-keys
        "sort-vars": "off",   //    http://eslint.org/docs/rules/sort-vars
        "space-before-blocks": "off",   //    http://eslint.org/docs/rules/space-before-blocks
        "space-before-function-paren": "off",   //    http://eslint.org/docs/rules/space-before-function-paren
        "space-in-parens": "off",   //    http://eslint.org/docs/rules/space-in-parens
        "space-infix-ops": "off",   //    http://eslint.org/docs/rules/space-infix-ops
        "space-unary-ops": "off",   //    http://eslint.org/docs/rules/space-unary-ops
        "spaced-comment": "off",   //    http://eslint.org/docs/rules/spaced-comment
        "strict": "off",   //    http://eslint.org/docs/rules/strict
        "symbol-description": "off",   //    http://eslint.org/docs/rules/symbol-description
        "template-curly-spacing": "off",   //    http://eslint.org/docs/rules/template-curly-spacing
        "template-tag-spacing": "off",   //    http://eslint.org/docs/rules/template-tag-spacing
        "unicode-bom": "off",   //    http://eslint.org/docs/rules/unicode-bom
        "use-isnan": "error",   //    http://eslint.org/docs/rules/use-isnan
        "valid-jsdoc": "off",   //    http://eslint.org/docs/rules/valid-jsdoc
        "valid-typeof": "error",   //    http://eslint.org/docs/rules/valid-typeof
        "vars-on-top": "off",   //    http://eslint.org/docs/rules/vars-on-top
        "wrap-iife": "off",   //    http://eslint.org/docs/rules/wrap-iife
        "wrap-regex": "off",   //    http://eslint.org/docs/rules/wrap-regex
        "yield-star-spacing": "off",   //    http://eslint.org/docs/rules/yield-star-spacing
        "yoda": "off"
    }
};
