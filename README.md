# cra-template-jinsung

This is my custom template for [Create React App](https://github.com/facebook/create-react-app).

This template includes:

- [Storybook](https://storybook.js.org)
- [TailwindCSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

To use this template, add `--template jinsung` when creating a new app.

For example:

```sh
npx create-react-app my-app --template jinsung

# or

yarn create react-app my-app --template jinsung
```

You have to manually init Storybook because Create React App doesn't support devDependencies for custom templates for now. Initialize storybook and discard all changes under `.storybook/` by executing the following npm script.

```sh
npm run init:storybook

# or run it manually

npx sb init
git restore .storybook
git clean -df src
```

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.
