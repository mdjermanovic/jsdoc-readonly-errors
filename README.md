# Repro for jsdoc parsing errors with `readonly`

Clone repo and run `npm install`.

## `jsdoc-type-pratt-parser` errors

Run `npm run test`.

Output:

```
Parsing: readonly string[]
NoParsletFoundError: No parslet found for token: 'readonly' with value 'readonly'
    at ...
Parsing: { readonly [type: string]: ReadonlyArray<string> }
UnexpectedTypeError: Unexpected type: 'JsdocTypeIndexSignature'.
    at ...
```

## `jsdoc/valid-types` rule errors

Run `npm run lint`.

Output:

```
path/to/eslint-plugin-jsdoc-test.js
   6:1  error  Syntax error in type: readonly string[]                                   jsdoc/valid-types
  13:1  error  Syntax error in type: { readonly [type: string]: ReadonlyArray<string> }  jsdoc/valid-types
```