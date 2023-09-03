const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Define a 'gulpSass' task using a Promise
gulp.task('gulpSass', function () {
  return new Promise(function (resolve, reject) {
    gulp.src('src/scss/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('dist/css'))
      .on('end', resolve) // Resolve when the task is done
      .on('error', reject); // Handle errors
  });
});

// Define a 'default' task
gulp.task('default', gulp.series('gulpSass'));
