# TypeScript Builds
> Example of TypeScript builds and workflows.
> For the official examples go to https://www.typescriptlang.org/samples/index.html

## Examples

* [AMD modules in browser](./AMD-Browser/)
* [CommonJS with Browserify](./CommonJS-Browserify/)
* [CommonJS with Browserify and Tsify](./CommonJS-Browserify-Tsify)
* [CommonJS with Gulp task with Browseriy and Tsify](./Gulp-CommonJS-Browserify-Tsify/)
* [CommonJS in Node](./CommonJS-Node)
* [SystemJS in browser](./SystemJS)
* [Maven](./Maven)
* [Webpack](./Webpack)
* [React app](./React)
* [React app + Normal app](./React-and-another-app)


If you want to start a fresh npm project from scratch, here are the steps to follow:

1. `mkdir myProject && cd myProject`
1. `mkdir src` (put your `.ts` files here)
1. `mkdir dist`
1. `npm --init`
1. `npm install typescript --save-dev`
1. `node_modules/.bin/tsc --init`
1. Edit `tsconfig.json`
1. Run `node_modules/.bin/tsc`

## On modules

[Choosing JavaScript Module Dependency Syntax](http://blog.calyptus.eu/seb/2011/10/choosing-a-javascript-module-syntax/)

## TODO

* CommonJS + Browser - https://github.com/volojs/create-template
* Rollup https://medium.com/@paleo.said/how-to-bundle-an-npm-package-with-typescript-and-rollup-f80e0f196189
