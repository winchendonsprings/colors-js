var gulp = require('gulp');
var sass = require('gulp-sass');

//Takes the scss files and converts them to css and will print an error if needed
gulp.task('styles', function() {
    gulp.src('scss/*.scss')
               .pipe(sass().on('error', sass.logError))
               .pipe(gulp.dest('./css/'));
});

//Watch task
gulp.task('default', function() {
    gulp.watch('scss/*.scss',['styles']);
});
