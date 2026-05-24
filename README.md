# Boeing DLS Global Angular Component Library

## Introduction

This README is for using the Angular libraries in your application.

### Using

How to consume the library in your Angular application, please refer to the documentation [here](https://github.com/Kellieisme/dp-dls-global-angular/tree/main/projects/design/dp-dls-global-angular#using-the-global-angular-component-library-in-your-angular-project)

### Contributing

If you are interested in contributing to the UX Design System, please refer to the [library README](https://github.com/Kellieisme/dp-dls-global-angular/tree/main/projects/design/dp-dls-global-angular#contributing-to-the-global-angular-component-library) for more in-depth instruction on contributing to the library.

## Installation

Install the Angular CLI. For more details on prerequisites see the [Angular documentation](https://angular.io/guide/setup-local#prerequisites).

```sh
npm install -g @angular/cli
```

### Create an .npmrc

The private NPM package (`@jeppesen-foreflight/dls-global-assets`) will be installed from the GitHub package registry. To enable this, create a new file named `.npmrc` in the project root. The content should be:

```text
@jeppesen-foreflight:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=GITHUB_AUTH_TOKEN
```

Replace the following values:

- GITHUB_AUTH_TOKEN: Create a [Github Personal Access Token](https://github.com/settings/tokens) with all permissions. Save in a safe place. Use that string as the GITHUB_AUTH_TOKEN.

### Install packages

```sh
npm install
```

> If npm install fails, it may help to first run `npm config set strict-ssl false`

## Local development

The Atmosphere DLS Global Angular Component Library has a dependency on the Atmosphere DLS Global Assets Library (`@jeppesen-foreflight/dls-global-assets`).

The package `@jeppesen-foreflight/dls-global-assets` will be downloaded from the Github package registry, as long as the `.npmrc` file is present, as described above.

During ongoing development, it may be useful to have local changes made to the `@jeppesen-foreflight/dls-global-assets` package reflect immediately in the `dp-dls-global-angular` project. To enable this, create a NPM symlink.

1. In the `dls-global-assets` directory, run `npm link`. This command creates a global symlink to the package.
2. In the `dp-dls-global-angular` directory, run `npm link @jeppesen-foreflight/dls-global-assets` to link the local version of `@jeppesen-foreflight/dls-global-assets` to the project. This allows you to work with the package locally and have your changes reflected immediately without publishing a new version to the NPM registry.

Note: If you run `npm install` after creating the symlink, you need to recreate it by doing step 2 above.

## Monorepo build pipeline (local dev from source)

If you are working across the full set of sibling repos rather than pulling packages from the registry, the repos must be built in this order:

```text
dp-dls-global-tokens  →  dp-dls-global-assets  →  dp-dls-global-angular  →  dp-dls-global-docs / dp-dls-global-starterkit
```

### Step 1 — Build tokens

```sh
cd dp-dls-global-tokens/packages/tokens
npm install && npm run compile
```

### Step 2 — Sync tokens into assets and build assets

```sh
cd dp-dls-global-assets
npm install
./token-service/scripts/sync-external-tokens.sh ../dp-dls-global-tokens
npm run build
```

> The sync script preserves `src/scss/base/external-tokens/_breakpoints.scss` — do not overwrite it manually from the tokens dist.

### Step 3 — Link assets locally, then build this library

```sh
# In dp-dls-global-assets:
npm link

# In dp-dls-global-angular:
npm link @jeppesen-foreflight/dls-global-assets
npx ng build dp-dls-global-angular
```

### Step 4 — Serve consumers

```sh
# Docs (port 4200)
cd dp-dls-global-docs && npm install && npm start

# DAS site (port 4201)
cd dp-dls-global-docs && npm run start:das

# Starterkit (port 4202)
cd dp-dls-global-starterkit && npm install && npm start
```

Whenever token source files change, re-run steps 1 → 2 → 3 before serving.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The @jeppesen-foreflight/dp-dls-global-angular library will rebuild and the demo application will automatically reload if you change any of the source files.

## Storybook server

Run `npm run storybook` to start Storybook. Storybook will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Security Analysis

This project uses GitHub CodeQL for automated security vulnerability detection and code quality analysis. CodeQL runs automatically on pushes, pull requests, and on a weekly schedule.

For detailed information about the CodeQL setup, configuration, and how to interpret results, see the [CodeQL Setup Documentation](./docs/CODEQL_SETUP.md).

To view security scan results:

1. Go to the **Security** tab in the GitHub repository
2. Click on **Code scanning** to see any detected issues
