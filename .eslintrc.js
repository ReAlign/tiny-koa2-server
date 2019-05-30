module.exports = {
    env: {
        "browser": true,
        "es6": true
    },
    globals: {
        "module": true,
        "require": true,
        "process": true,
    },
    extends: "eslint:recommended",
    parserOptions: {
        sourceType: "module",
        parser: "babel-eslint",
    },
    parser: "babel-eslint",
    rules: {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": "off",
    }
};