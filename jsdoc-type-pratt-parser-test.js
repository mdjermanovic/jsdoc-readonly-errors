// run `npm test` to reproduce

const { parse } = require("jsdoc-type-pratt-parser");

const type1 = "readonly string[]";
try {
    parse(type1, "typescript")
} catch (e) {
    console.log(`Parsing: ${type1}`);
    console.log(e);
}

const type2 = "{ readonly [type: string]: ReadonlyArray<string> }";
try {
    parse(type2, "typescript")
} catch (e) {
    console.log(`Parsing: ${type2}`);
    console.log(e);
}

