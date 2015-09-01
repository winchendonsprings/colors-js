var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Normal compile without browsersync
//
//                //Takes the scss files and converts them to css and will print an error if needed
//                gulp.task('styles', function() {
//                    gulp.src('scss/*.scss')
//                        // .pipe(sass().on('error', sass.logError))
//                        .pipe(sass({
//                            includePaths: require('node-bourbon').includePaths,
//                            includePaths: require('node-neat').includePaths
//                        }).on('error', sass.logError))
//                //	.pipe(sass({
//                //            includePaths: require('node-neat').includePaths
//                //        }))
//                        // .pipe(sass().on('error', sass.logError))
//                        .pipe(gulp.dest('css/'));
//                });
//
//                //Watch task
//                gulp.task('default', function() {
//                    gulp.watch('scss/*.scss',['styles']);
//                });


// With browsersync 

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        // server: "./"
        proxy: "drupal3.local"
    });

    gulp.watch("./scss/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./scss/*.scss")
        // .pipe(sass())
        .pipe(sass({
            includePaths: require('node-bourbon').includePaths,
            includePaths: require('node-neat').includePaths
        }).on('error', sass.logError))
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
