var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    ts = require('gulp-typescript'),
    babel = require('gulp-babel'),
    livereload = require('gulp-livereload')
    exec = require('child_process').exec,
    open = require('open');

gulp.task('script', () => {  
    return gulp.src('src/js/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts({
            noImplicitAny: true,
            out: 'index.js'
        }))
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./Let'))
        .pipe(livereload());
});

gulp.task('server', (cb) => {
    open('http://localhost:3000'); 
    exec('node server.js', (err, stdout, stderr) => {
        console.log(err);
        cb(err);
    });
});

gulp.task('browser', () => {
    console.log('browse');
    open('http://localhost:3000');    
});

gulp.task('watch', () => {
    livereload.listen();
    gulp.watch('src/js/**/*.ts', ['script']);
})
gulp.task('default', ['server', 'watch']);