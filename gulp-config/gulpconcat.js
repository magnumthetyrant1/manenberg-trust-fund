var concat = require('gulp-concat');

module.exports = function (gulp) {
  gulp.task('scripts', function() {
  return gulp.src('./public/javascript/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./public/dist/'));
  });
};
