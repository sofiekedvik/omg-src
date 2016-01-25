var gulp = require('gulp'),
 sass = require('gulp-sass');


gulp.task('sass', function(){
  gulp.src(['app/stylesheets/**/*.scss'])
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('app/stylesheets'));
});


gulp.task('bootstrap-sass', function(){
  gulp.src(['bower_components/bootstrap-sass/assets/stylesheets/bootstrap.scss'])
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('app/stylesheets'));
});

gulp.task('bootstrap-js', function(){
  gulp.src(['bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js'])
  .pipe(gulp.dest('app/js'));
});

gulp.task('jquery', function(){
  gulp.src(['bower_components/jquery/dist/jquery.min.js'])
  .pipe(gulp.dest('app/js'));
});

gulp.task('fonts', function(){
  gulp.src(['bower_components/bootstrap-sass/assets/fonts/**'])
  .pipe(gulp.dest('app/fonts'));
});

gulp.task('sass:watch', function() {
  gulp.watch('app/stylesheets/style.scss', ['sass']);
});

gulp.task('default', ['sass', 'bootstrap-sass','bootstrap-js','jquery','fonts']);
