const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync').create(); // browser auto reload

const $ = gulpLoadPlugins();

gulp.task('default', ['css', 'js', 'views']);

gulp.task('browserSync', ['default'], () => {
  browserSync.init({
    notify: false,
    port: 8000,
    server: {
      baseDir: 'dist',
    },
  });
});

gulp.task('watch', ['browserSync'], () => {
  gulp.watch('src/sass/**/*.scss', ['css']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('src/views/**/*.pug', ['views']);
});

gulp.task('min', ['css-min']);

gulp.task('css', () => {
  gulp.src('src/sass/**/*.scss')
    .pipe($.plumber())
    .pipe($.sass.sync({
      outputStyle: 'nested', // expanded, nested, compact, compressed
      precision: 10,
      includePath: ['.'],
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('css-min', () => {
  gulp.src('src/sass/**/*.scss')
    .pipe($.plumber())
    .pipe($.sass.sync({
      outputStyle: 'compressed',
      precision: 10,
      includePath: ['.'],
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe($.rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'))
    .pipe($.notify({
      message: 'Minify Sass Complete!',
      onLast: true,
    }));
});

gulp.task('js', () => {
  $.run('npm run build:js').exec()
    .pipe(browserSync.stream());
});

gulp.task('views', () => {
  gulp.src('src/views/**/*.pug')
    .pipe($.plumber())
    .pipe($.pug({
      pretty: true,
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});
