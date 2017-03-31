let gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    ts = require('gulp-typescript'),
    babel = require('gulp-babel');

gulp.task('script', () => {  
    return gulp.src('src/js/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts({
            noImplicitAny: true,
            out: 'index.js'
        }))
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dest'));
});

gulp.task('default', () => {
    gulp.watch('src/js/**/*.ts', ['script']);
});