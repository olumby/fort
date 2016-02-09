var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var gulpif = require('gulp-if');


function buildCss(useMaps, compress) {
    return gulp.src('fort/fort.scss')
        .pipe(plumber())
        .pipe(gulpif(useMaps, sourcemaps.init()))
        .pipe(gulpif(!compress, sass().on('error', sass.logError)))
        .pipe(gulpif(compress, sass({outputStyle: 'compressed'}).on('error', sass.logError)))
        .pipe(gulpif(compress, rename('fort.min.css')))
        .pipe(gulpif(useMaps, sourcemaps.write('.')))
}

gulp.task('build:css', function () {
    return buildCss(true, false)
        .pipe(gulp.dest('./build'));
});

gulp.task('build:css:min', function() {
    return buildCss(true, true)
        .pipe(gulp.dest('./build'));
});

gulp.task('build', ['build:css', 'build:css:min']);

gulp.task('dist:css', function () {
    return buildCss(false, false)
        .pipe(gulp.dest('./dist'));
});

gulp.task('dist:css:min', function() {
    return buildCss(false, true)
        .pipe(gulp.dest('./dist'));
});

gulp.task('dist', ['dist:css', 'dist:css:min']);

gulp.task('run', function () {
    gulp.src('.')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
    gulp.watch('fort/**/*.scss', ['build']);
});

