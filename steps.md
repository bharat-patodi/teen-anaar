### Heroku?
### GraphQL?
### Express?

### Express and GraphQL:
Create the server folder, ```npm init``` and then install express w ```npm install express```
`npm install graphql express-graphql`

create the app.js file and add in the express code.

Then for graphql, create a schema folder and house the schema.js file in there and define the schema in there.

get lodash for ???

try ```graphiql: true``` in the app.js file with the ```schema:schema``` defined. Reload.

### Prettier: https://thomlom.dev/setup-eslint-prettier-react/

`npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier`

Then, change ESLint config:
```Javascript
{
    "eslintConfig": {
        "extends": ["react-app", "plugin:prettier/recommended"]
  }
}
```
and either add a .prettierrc file or add to package.json:

``` Javascript
{
    "prettier": {
        "printWidth": 90,
    "bracketSpacing": false,
    "trailingComma": "es5"
  }
}
```

Now, to add a pre-commit git **hook** to this config, so that before committing my code, it gets linted.

`npm install --save-dev husky lint-staged`

add a husky key to package.json:
``` Javascript
"husky": {
    "hooks": {
        "pre-commit": "lint-staged"
    }
  }
```
then for the 'lint-staged', we need to define config:

``` Javascript
  "lint-staged": {
      "*.+(js|jsx)": ["eslint --fix", "git add"],
    "*.+(json|css|md)": ["prettier --write", "git add"]
  }
```

### Webpack?
... already pre-packaged with CRA

### ESLint
... already pre-packaged with CRA

Folder structure: Client with CRA and Server with npm init.
