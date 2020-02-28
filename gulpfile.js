var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
clean = require('gulp-clean'),
browserSync = require('browser-sync').create(),
gulpSequence = require ('gulp-sequence'),
sass = require('gulp-sass');

gulp.task('copy', ['clean'], function () {
    return gulp.src('src/**/*')
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
    return gulp.src('dist')
    .pipe(clean());
});

gulp.task('build-img', function () {
    
    return gulp.src('dist/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });
    gulp.watch('src/sass/**/*.scss',['sass']).on('change', browserSync.reload);
    gulp.watch('src/*.html').on('change', browserSync.reload);
    gulp.watch('src/js/*.js').on('change', browserSync.reload);
});

gulp.task('sass',function(){
    return gulp.src('src/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

gulp.task("default", gulpSequence('copy', 'build-img', 'sass', 'serve'));