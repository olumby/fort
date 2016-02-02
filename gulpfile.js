var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
//var watch = require('gulp-watch');
var rename = require('gulp-rename');

gulp.task('build:css', function () {
    return gulp.src('sturret/sturret.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist'));
});

gulp.task('build:min', function() {
    return gulp.src('sturret/sturret.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename('sturret.min.css'))
        .pipe(gulp.dest('./dist'));
})


gulp.task('watch', function () {
    gulp.watch('sturret/**/*.scss', ['build:css', 'build:min']);
});
