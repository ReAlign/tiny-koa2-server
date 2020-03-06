module.exports = {
    parserOptions: {
        parser: "babel-eslint",
        //...
    },
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "module": true,
        "require": true,
        "process": true,
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
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