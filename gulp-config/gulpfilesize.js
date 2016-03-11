var size = require('gulp-filesize');

module.exports  = function (gulp) {
  gulp.src('./css/*.css')
//all your gulp tasks
.pipe(gulp.dest('./dist/'))
.pipe(size()); // [gulp] Size example.css: 265.32 kB
};
