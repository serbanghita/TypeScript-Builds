# TypeScript Builds
> Example of TypeScript builds and workflows.

### Install

1. `git clone git@github.com:serbanghita/TypeScript-Builds.git`
1. `cd TypeScript-Builds/build`
1. Choose one build type: 
    1. `AMD` 
    1. `CommonJS`
    1. `CommonJS-Browserify`
    1. `CommonJS-Browserify-Tsify`
    1. `SystemJS`
    1. `Gulp-CommonJS-Browserify-Tsify`
    1. `Maven` (with remote git repo that uses AMD)
1. `npm install`
1. `npm run build`
1. `npm run startServer`

@todo: discuss [breaking changes](https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes).

# Stats

| Build  | `tsc` time |
| ------------- | ------------- |
| `AMD`  | 0.85s  |
| `CommonJS`  | 0.88s  |
| `CommonJS-Browserify`  | 0.89s  |
| `SystemJS`  | 0.99s  |

@todo discussion  [performance](https://github.com/Microsoft/TypeScript/issues/13538).

PS: Need to automate this. Currently I manually run a command and then extract the result `cd AMD/ && tsc && cd .. && cd CommonJS && tsc && cd .. && cd CommonJS-Browserify/ && tsc && cd .. && cd SystemJS/ && tsc`

### Step-by-step from scratch
> Example of JavaScript project using AMD modules.

* `git clone your-new-repo`
* `cd your-new-repo`
* `npm init`
* add and install needed npm packages
    * `npm install typescript --save-dev`
    * `npm install requirejs --save-dev`
    * `npm install browsersync --save-dev`
* add `scripts` properties to your `package.json`
    ```json
    {
      "scripts": {
        "tsc": "node_modules/.bin/tsc",
        "build": "cp node_modules/requirejs/require.js dist/js && npm run tsc",
        "startServer": "node_modules/.bin/browser-sync start --s dist --f dist --port 3000 --reload-debounce 1500 --no-ui"
      }
    }
    ```
* initiate and configure TypeScript
  * `tsc --init` (if not in `PATH` use `./node_modules/.bin/tsc`)
  * Edit `tsconfig.json`
  ```json
    {
        "compilerOptions": {
            "module": "amd",
            "target": "es5",
            "noImplicitAny": false,
            "sourceMap": false,
            "outFile": "dist/js/bundle.amd.js",
            "listEmittedFiles": true,
            "pretty": true,
            "diagnostics": true
        },
        "include": [
            "src/index.ts"
        ],
        "exclude": [
            "node_modules",
            "dist"
        ]
    }
  ```
* create `.gitignore` file.
  * add `.idea`
  * add `node_modules`
  * add `dist/js`
* create directories
    * `mkdir src`
    * `mdir dist && mkdir dist/js`
* `cd dist/js`
  * create `index.html` file
  ```html
    <script src="js/require.js"></script>
    <script src="js/bundle.amd.js"></script>
    <script>require(["index"]);</script>
  ```
* create your first `.ts` files in `src` directory.
* `tsc`
* `npm run startServer`


You can find a complete example in [`build/AMD`](./build/AMD).