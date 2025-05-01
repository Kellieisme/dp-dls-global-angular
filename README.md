# Boeing DLS Global Angular Component Library

## Introduction

This README is for using the Angular libraries in your application. 

### Using
How to consume the library in your Angular application, please refer to the documentation [here](https://git.web.boeing.com/design/design-system/dls-global-angular/-/tree/develop/projects/design/dls-global-angular#using-the-global-angular-component-library-in-your-angular-project)

### Contributing
If you are interested in contributing to the UX Design System, please refer to the [library README](https://git.web.boeing.com/design/design-system/dls-global-angular/-/tree/release/projects/design/dls-global-angular?ref_type=heads#contributing-to-the-global-angular-component-library) for more in-depth instruction on contributing to the library.

## Installation

Install the Angular CLI. For more details on prerequisites see the [Angular documentation](https://angular.io/guide/setup-local#prerequisites).

```
npm install -g @angular/cli
```

### Create an .npmrc

Public NPM packages will be installed from the Boeing SRES package repository (Jfrog Artifactory) and private NPM packages (`@dasdigitalplatform/dls-global-assets`) will be downloaded from the Boeing GitLab package registry. To enable this, create a new filed named `.npmrc` in the project root. The content should be:

```
registry=https://sres.web.boeing.com/artifactory/api/npm/npm-remote/
//sres.web.boeing.com/artifactory/api/npm/npm-remote/:_password=JFROG_PASSWORD
//sres.web.boeing.com/artifactory/api/npm/npm-remote/:username=JFROG_USERNAME
//sres.web.boeing.com/artifactory/api/npm/npm-remote/:email=EMAIL
//sres.web.boeing.com/artifactory/api/npm/npm-remote/:always-auth=true
@dasdigitalplatform:registry=https://git.web.boeing.com/api/v4/packages/npm/
//git.web.boeing.com/api/v4/packages/npm/:_authToken=GITLAB_AUTH_TOKEN
```

Replace the folowing values:
- JFROG_PASSWORD: Login to [Artifactory](https://sres.web.boeing.com/ui/admin/artifactory/user_profile) using your Boeing email and Windows password. Go to User Profile and create a new Identity Token. Save in a safe place. Encode the Identity Token in [Base64](https://www.base64encode.org/) and use that string as the JFROG_PASSWORD.
- JFROG_USERNAME: On [Artifactory](https://sres.web.boeing.com/) in the top right you will see your username, a 7-digit number.
- EMAIL: Your Boeing email
- GITLAB_AUTH_TOKEN: Create a [GitLab Personal Access Token](https://git.web.boeing.com/-/user_settings/personal_access_tokens) with all permissions. Save in a safe place. Use that string as the GITLAB_AUTH_TOKEN.

### Install packages

```sh
$ npm install
```

> If npm install fails because it can't connect to Artifactory, it may help to first run `npm config set strict-ssl false`

## Local development

The Boeing DLS Global Angular Component Library has a dependency on the Boeing DLS Global Assets Library (`@dasdigitalplatform/dls-global-assets`). 

The package `@dasdigitalplatform/dls-global-assets` will be downloaded from the GitLab package registry, as long as the `.npmrc` file is present, as described above.

During ongoing development, it may be useful to have local changes made to the `@dasdigitalplatform/dls-global-assets` package reflect immediately in the `dls-global-angular`project. To enable this, create a NPM symlink.

1. In the `dls-global-assets` directory, run `npm link`. This command creates a global symlink to the package.

2. In the `dls-global-angular` directory, run `npm link @dasdigitalplatform/dls-global-assets` to link the local version of `@dasdigitalplatform/dls-global-assets` to the project. This allows you to work with the package locally and have your changes reflected immeidately without publishing a new version to the NPM registry.

*Note:* If you run `npm install` after creating the symlink, you need to recreate it by doing step 2 above.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The @dasdigitalplatform/dls-global-angular library will rebuild and the demo application will automatically reload if you change any of the source files.

## Storybook server

Run `npm run storybook` to start Storybook. Navigate to `http://localhost:6006/`. Storybook will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.
