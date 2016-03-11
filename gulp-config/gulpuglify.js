var uglify = require('gulp-uglify');

module.exports = function (gulp) {
  gulp.task('compress', function() {
    return gulp.src('./public/dist/all.js')
      .pipe(uglify())
      .pipe(gulp.dest('./public/dist'));
  });
};
