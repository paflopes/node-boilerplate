# Node boilerplate

This is a simple project that provides some tools set up for productivity.

## Building the project

```bash
# Run this one just the first time
yarn global add gulp-cli

# Install the dependencies
yarn

# Lint, test and build the code
gulp

# List available tasks
gulp -T
# ├─┬ default
# │ ├── lint
# │ ├── test
# │ └── build
# ├── build
# ├── test
# ├── lint
# ├─┬ clean
# │ └── clean:dist
# └── clean:dist
```

## What's included?

- Facebook's [Jest](https://facebook.github.io/jest/) for testing;
- [Gulp](https://gulpjs.com/) for automated tasks;
- [ESLint](https://eslint.org/) for linting;
- [Babel](https://babeljs.io/) (`import x from y` syntax);


