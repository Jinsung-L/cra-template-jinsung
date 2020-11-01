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

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.

## Troubleshotting

### Storybook was built without an error but fails to render

This happens when there's unresolved issues on Storybook often related to the latest version of React or TypeScript.

To workaround this issue, try `start-storybook` command with `--no-dll` option.

```sh
start-storybook -p 6006 -s public --no-dll
```

Or upgrade Storybook to the preleased version which might has already resolved the issue.

```sh
npx sb@next upgrade --prerelease
```

For more information, please refer to [Storybook's issue tracker](https://github.com/storybookjs/storybook/issues)
