# Idealogue.studio site

### Basic usage:

- `npm ci` to install deps,
- `npm start` to play around locally, and
- `npm run build` to compile the statics.

### Deployment

- `npm version <patch|minor|…>` to get a tag and a version commit.
- `git push --atomic master <tag aka version>` to get it deployed to `gh-pages` branch in the current repo.
