var gulp = require('gulp'),
 sass = require('gulp-sass');


gulp.task('sass', function(){
  gulp.src(['app/css/*.scss'])
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('app/css'));
});


gulp.task('bootstrap-sass', function(){
  gulp.src(['./bower_components/bootstrap-sass/assets/stylesheets/bootstrap.scss'])
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('app/css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('app/css/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'bootstrap-sass']);
