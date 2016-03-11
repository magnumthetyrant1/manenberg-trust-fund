var sass = require("gulp-sass");

module.exports = function (gulp) {
  gulp.task('sass', function () {
    return gulp.src('./public/stylesheets/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/dist/'));
  });

  gulp.task('sass:watch', function () {
    gulp.watch('./public/stylesheets/*.scss', ['sass']);
  });
};
