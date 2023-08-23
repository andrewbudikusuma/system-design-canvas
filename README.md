<div>
  <h1>System Design Canvas</h1>
    <strong>
        ❗This is not production design system, 
        the purpose of this repository is to provide my learning for the design system concepts
    </strong>
</div>
<hr />

## Quick start

Assuming that you will run in a local development environment, follow the instructions below:

#### 1. Install `yarn`

This repository uses `yarn` v3 (berry).

#### 2. Install the packages

Run `yarn` to install the node packages

### 3. Build the packages

Some packages need to be built before consuming them, like the `foundation`, which will distribute the design tokens to
the rest of the packages. To build the packages execute:

```bash
yarn workspace @canvas-ds/foundation build # Build the foundation package
yarn workspace @canvas-ds/react build # Build the react package
```

## System Requirements

- git
- NodeJS `>=10.13.0` to work with Storybook
- yarn v3

## Run Storybook

You can run Storybook and instantly start experimenting with the components' code running the command:

```bash
yarn workspace @canvas-ds/storybook storybook
```

You can look up example storybook in https://canvas-andrew-storybook.surge.sh

## Stacks and Technologies

- monorepo with yarn workspaces
- storybook
- react
- styled-components
- typescript
- style dictionary
- changesets
- TailwindCSS

## TODO

- [ ] Release into real npm packages with changesets
- [ ] Chromatic integration
- [ ] Add more components as example