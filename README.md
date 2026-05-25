# dp-dls-global-angular

Angular component library for the Atmosphere Design Language System.

## Distribution model

This package is **not published to any npm registry**. Consumers clone this repo and build locally. See the [monorepo build pipeline](#monorepo-build-pipeline) section below.

## Branch notes

- `main` — current working branch. All development happens here.

## Fresh clone — quick start

Assets must be built first (it is a `file:` dependency of this repo).

```sh
# 1. Build assets
cd dp-dls-global-assets && npm install && npm run build

# 2. Register assets as a global symlink
npm link

# 3. Install and link in this repo
cd dp-dls-global-angular
npm install
npm link @jeppesen-foreflight/dls-global-assets

# 4. Build the library
npx ng build "@jeppesen-foreflight/dp-dls-global-angular"
```

> Re-run `npm link @jeppesen-foreflight/dls-global-assets` after any `npm install` in this repo. The symlink is needed so consuming project builds (docs, starterkit) resolve assets correctly when building from their own context.

## Monorepo build pipeline

These repos must be built in order — each depends on the dist of the previous:

```text
dp-dls-global-tokens  →  dp-dls-global-assets  →  dp-dls-global-angular  →  dp-dls-global-docs
                                                                           →  dp-dls-global-starterkit
```

For a fresh clone, start at **assets** (step 2). Only go back to tokens if token values changed.

### Step 1 — Tokens (only if token values changed)

```sh
cd dp-dls-global-tokens/packages/tokens
npm install && npm run compile

rsync -av --delete --exclude '_breakpoints.scss' \
  packages/tokens/dist/scss/ \
  ../dp-dls-global-assets/src/scss/base/external-tokens/
```

### Step 2 — Assets

```sh
cd dp-dls-global-assets
npm install && npm run build && npm link
```

### Step 3 — This library

```sh
npm install
npm link @jeppesen-foreflight/dls-global-assets
npx ng build "@jeppesen-foreflight/dp-dls-global-angular"
```

### Step 4 — Serve demo app

```sh
npx ng serve demo
```

### Step 5 — Docs / Starterkit

```sh
cd dp-dls-global-docs && npm install && npm start        # port 4200
cd dp-dls-global-starterkit && npm install && npm start  # port 4202
```

## Development

### Demo app

```sh
npx ng serve demo
```

### Storybook

```sh
npm run storybook
```

## CI

The GitHub Actions workflow checks out `dp-dls-global-assets` as a sibling repo, builds it, then builds this library. No registry access is required.
