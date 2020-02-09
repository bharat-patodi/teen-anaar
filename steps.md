For prettier: https://thomlom.dev/setup-eslint-prettier-react/
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
Then, change ESLint config:
{
  "eslintConfig": {
    "extends": ["react-app", "plugin:prettier/recommended"]
  }
}
and either add a .prettierrc file or add to package.json:

{
  "prettier": {
    "printWidth": 90,
    "bracketSpacing": false,
    "trailingComma": "es5"
  }
}

Now, to add a pre-commit hook to this config, so that before committing my code, it gets linted.

npm install --save-dev husky lint-staged

add a husky key to package.json:
"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
then for the 'lint-staged', we need to define config:

  "lint-staged": {
    "*.+(js|jsx)": ["eslint --fix", "git add"],
    "*.+(json|css|md)": ["prettier --write", "git add"]
  }

