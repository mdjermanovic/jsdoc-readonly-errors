module.exports = {
    plugins: ["jsdoc"],
    rules: {
        "jsdoc/valid-types": "error"
    },
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    settings: {
        jsdoc: {
            mode: "typescript"
        }
    }
};