# Boilerplate for SPA:s

Simple boilerplate for single page applications.  

## Tech used for compiling

* [Webpack](https://webpack.js.org/) for bundling.
* [Babel](https://babeljs.io/) for es2017 support.
* [scss](https://sass-lang.com/) for styling.
* [jest](https://facebook.github.io/jest/) for JavaScript testing.
* [semistandard](https://github.com/Flet/semistandard) for JS standard.

Check the `package.json` file a detailed list of packages.

The webpack configurations will build the html index file from the `index.tmpl.html` file in the src directory.  
All images in the img directory will be copied to `dist/img`. JavaScript and CSS will be compiled and bundled into 
js files.

## Setup

Clone and install repo:

```
git clone git@github.com:jitesoft/boilerplate-spa.git
yarn install
```

Open `package.json` file, change the name of the project and update all meta tags that you wish to have injected into the resulting HTML files.

### Development

Run `yarn watch` and webpack-serve will start a hot-swap enabled server with the `webpack/webpack.config.dev.js` configuration.  
To build dev files to dist, run `yarn build:dev`

#### Testing

The package comes with `jest` and `semistandard` by default. To run them, run `yarn test`.

### Production

To build the production files, run `yarn build:prod`. Resulting files will be placed in the `dist` directory.

#### Docker

Build the docker file for a lighttpd instance running your site!


