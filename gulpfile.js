var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');

gulp.task('build:css', function () {
    return gulp.src('fort/fort.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build:min', function() {
    return gulp.src('fort/fort.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename('fort.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
})


gulp.task('run', function () {
    gulp.src('.')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
    gulp.watch('fort/**/*.scss', ['build:css', 'build:min']);
});
