var gulp = require('gulp');  
var sourcemaps = require('gulp-sourcemaps');  
var ts = require('gulp-typescript');  
var babel = require('gulp-babel');

//var tsProject = ts.createProject('./src/tsconfig.json');

gulp.task('script', function() {  
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