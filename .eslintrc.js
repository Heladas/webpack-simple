module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "airbnb-base",
    "rules": {
        "no-console":0,
        // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
            'js': 'never',
            'vue': 'never'
        }],
        "indent": ["error", 4],
        "linebreak-style": 0,
        "comma-dangle": ["error", "never"],
        "func-names": ["error", "never"]
    }
};