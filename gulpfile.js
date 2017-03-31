var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    ts = require('gulp-typescript'),
    babel = require('gulp-babel'),
    livereload = require('gulp-livereload');

gulp.task('script', () => {  
    return gulp.src('src/js/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts({
            noImplicitAny: true,
            out: 'index.js'
        }))
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dest'))
        .pipe(livereload());
});

gulp.task('default', () => {
    livereload.listen();
    gulp.watch('src/js/**/*.ts', ['script']);
});