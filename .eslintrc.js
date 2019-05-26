module.exports = {
  "env": {
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "plugins": [
    "@typescript-eslint"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "rules": {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "es5",
        semi: false,
        bracketSpacing: true,
        printWidth: 80,
        tabWidth: 2,
        useTabs: false
      }
    ],
    "no-undef": 'off',
    "@typescript-eslint/no-var-requires": 'off',
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "no-unused-vars": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "indent": [2, 2],
    "@typescript-eslint/indent": [2, 2],
  }
}
