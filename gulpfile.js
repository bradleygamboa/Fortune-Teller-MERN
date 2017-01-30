const gulp = require('gulp');
const babel = require('gulp-babel');
var browserify = require('gulp-browserify');
var prettyError = require('gulp-prettyerror');

// Transpile the JSX and ES6 and place in the dist directory
gulp.task('transpile', function() {
    return gulp.src('src/**/*.js')
        .pipe(prettyError())
        .pipe(babel({
            presets: ['es2015','react']
        }))
        .pipe(gulp.dest('dist'));
});

// Browserify
gulp.task('scripts', function() {
    // Single entry point to browserify in the dist directroy
    gulp.src('dist/index.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        // Place the bundled index.js file in the public directory
        .pipe(gulp.dest('public'))
});

// Watch for changes
gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ['transpile']);
  gulp.watch('dist/**/*', ['scripts']);
});

gulp.task('default', ['watch']);
