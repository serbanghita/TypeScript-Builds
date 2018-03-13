var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");

gulp.task("build", function() {
    browserify({debug: true})
    .add("../../src/index.ts")
    .plugin('tsify')
    .bundle()
    // log errors if they happen
    .on("error", function(e){
        console.log(e);
        throw e;
    })
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("dist/js"));
});

