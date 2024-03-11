module.exports = {
  parserOptions: {
    ecmaVersion: "latest",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        ".eslintrc.{js,cjs}",
      ],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  rules: {
    "indent" :["error",2],
    "semi": ["error", "always"],
    "quotes" :["error","double"],
    "space-before-function-paren" : ["error","always"],
    "arrow-spacing" : "error",
    "no-console" :"warn",
    "comma-dangle": ["error", "always-multiline"],


  },

};