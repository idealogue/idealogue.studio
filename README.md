# Idealogue.studio site

### Basic usage:

- `npm ci` to install deps,
- `npm start` to play around locally, and
- `npm build` to compile the statics.

### Staging deployment

- `npm version prerelease --preid=rc` to get a staging-like version.
- `git push <remote> <rc tag>` to get it deployed to `gh-pages` branch in the current repo.
