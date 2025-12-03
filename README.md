# Derolas Landing Page

This is a SvelteKit project bootstrapped with `create-svelte` and enhanced with [shadcn/ui](https://shadcn-svelte.com/) components.

It has a backend API built with Flask.


## To Install
```sh
make install
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Formating and Linting

To ensure that your code adheres to the project's coding standards, you can run the following command to format and lint your code:

```sh
make all
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Adding components

Ui Components are made using the shadcn/ui library. To add a new component, follow these steps:
Visit the [shadcn/ui website](https://shadcn-svelte.com/docs/) and select the component you want to add. Copy the code snippets provided for the component and paste them into the appropriate files in your project. Make sure to also install any required dependencies listed on the shadcn/ui website.

## Release It Configuration

To run a release use the command:
Note: you must ensure that the `GITHUB_TOKEN` environment variable is set with a valid GitHub token that has permissions to create releases in the repository.

```sh
make release
```


## Developement Server.
To start the development server, use the command:
```sh
make backend-api
```