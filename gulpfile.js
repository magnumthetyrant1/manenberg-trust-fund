var gulp = require("gulp");


// Compile Sass into CSS using gulp-sass [sass].
require('./gulpconfig/gulpsass')(gulp);

// Start the server [start]
require('./gulpconfig/gulpnodemon')(gulp);

// Combine all js files into a single file[scripts]
require('./gulpconfig/gulpconcat')(gulp);

// Compress the js [compress]
require('./gulpconfig/gulpuglify')(gulp);

//Compress CSS [minify-css]
require('./gulpconfig/gulpminifycss')(gulp);

//Combine and uglify js files.
gulp.task('js', ['scripts', 'compress']);

//Compile sass on compress css
gulp.task('css', ['sass', 'minify-css']);

gulp.task('default', ['js', 'css', 'start']);
