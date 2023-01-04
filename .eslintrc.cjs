module.exports = {
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  extends: ["xo", "plugin:astro/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
  overrides: [
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      extends: ["plugin:@typescript-eslint/recommended"],
      rules: {
        "@typescript-eslint/no-unused-vars": [
          "error",
          { argsIgnorePattern: "^_", destructuredArrayIgnorePattern: "^_" },
        ],
        "@typescript-eslint/no-non-null-assertion": "off",
      },
    },
  ],
};
