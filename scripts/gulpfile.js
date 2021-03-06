var gulp   = require("gulp"),
    bundle = require("./bundle");

var defaultTask = [];

function defineTask(name, entry, target) {
    gulp.task(name + "-bundle", bundle.bind(this, {
        entry    : entry,
        target   : target
    }));
    gulp.task(name + "-minify" , [ name + "-bundle" ], bundle.bind(this, {
        entry    : entry,
        target   : target,
        compress : true
    }));
    defaultTask.push(name + "-bundle", name + "-minify");
}

defineTask("full"   , "../src/index"        , "../dist"        );
defineTask("light"  , "../src/index-light"  , "../dist/light"  );
defineTask("minimal", "../src/index-minimal", "../dist/minimal");

gulp.task("default", defaultTask);

/* var typedoc = require("gulp-typedoc");
gulp.task("typedoc", function() {
    return gulp
        .src(["../index.d.ts"])
        .pipe(typedoc({
            module: "commonjs",
            target: "es5",
            mode: "file",
            theme: "default",
            includeDeclarations: true,
            excludePrivate: true,
            out: "../tsdocs",
            name: "protobuf.js"
        }))
}); */

