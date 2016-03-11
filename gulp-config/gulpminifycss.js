var minifyCss = require('gulp-minify-css');

module.exports = function (gulp) {
  gulp.task('minify-css', function() {
    return gulp.src('./public/dist/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./public/dist'));
  });
};
