
var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('rehtml', function () {
    gulp.src('*.html')
        .pipe(livereload());
});

gulp.task('default', function() {
    livereload.listen();
    gulp.watch('*.html', ['rehtml']);
    gulp.watch('*.js', ['rehtml']);
});
