"use strict";

let gulp = require("gulp");
let browserify = require("browserify");
let source = require("vinyl-source-stream");
let browserSync = require("browser-sync");

gulp.task("build", () => {
    browserify({debug: true})
        .add("src/index.tsx")
        .plugin("tsify")
        .bundle()
        .on("error", function(e){
            // console.log(e);
            console.log(e.message);
            // throw e;
        })
        .pipe(source("bundle.browserify.js"))
        .pipe(gulp.dest("dist/js"));
});

gulp.task("serve", () => {
    browserSync.init({
        port: 3002,
        reloadDebounce: 200,
        server: {
            baseDir: "dist"
        },
        files: ["dist/js/*", "dist/css/*", "dist/index.html"],
        ui: false
    });
});

gulp.task("watch", () => {
    let watcher = gulp.watch("src/**/*.tsx", ["build"]);
    watcher.on("change", function(event) {
        console.log(`File ${event.path} was ${event.type}, running tasks...`);
    });
});

gulp.task("default", ["watch", "serve"]);
