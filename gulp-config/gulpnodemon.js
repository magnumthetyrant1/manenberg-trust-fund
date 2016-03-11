var nodemon = require('gulp-nodemon');

module.exports = function (gulp) {
  gulp.task('start', function () {
  nodemon({
    script: 'server.js',
    ext: 'js html',
    env: { 'NODE_ENV': 'development' }
  });
});
};
