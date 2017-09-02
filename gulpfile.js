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
      baseDir: 'dist'
    },
  });
});

gulp.task('watch', ['browserSync'], () => {
  gulp.watch('src/sass/**/*.scss', ['css']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('src/views/**/*.pug', ['views']);
});

gulp.task('min', ['css-min', 'js-min']);

gulp.task('css', () => {
  gulp.src('src/sass/**/*.scss')
    .pipe($.plumber())
    .pipe($.sass.sync({
      outputStyle: 'nested', // expanded, nested, compact, compressed
      precision: 10,
      includePath: ['.'],
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(gulp.dest('dist/css')) // output folder
    .pipe(browserSync.stream())
  // .pipe($.notify("Compile Sass Complete!"))
});

gulp.task('css-min', ()=>{
  gulp.src('src/sass/**/*.scss')
    .pipe($.plumber())
    .pipe($.sass.sync({
      outputStyle: 'compressed',
      precision: 10,
      includePath: ['.'],
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe($.rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css')) // output folder
    .pipe($.notify({
      message: 'Minify Sass Complete!',
      onLast: true,
    }))
});

gulp.task('js', () => {
  gulp.src('src/js/**/*.js')
    .pipe($.plumber())
    .pipe($.babel())
    .pipe(gulp.dest('dist/js')) // output folder
    .pipe(browserSync.stream())
  // .pipe($.notify("Compile Javascript Complete!"))
});

gulp.task('js-min', () => {
  gulp.src('src/js/**/*.js')
    .pipe($.plumber())
    .pipe($.babel())
    .pipe($.uglify()) // minify
    .pipe($.rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/js'))
    .pipe($.notify({
      message: 'Minify Javascript Complete!',
      onLast: true,
    }))
});

gulp.task('views', () => {
  gulp.src('src/views/**/*.pug')
    .pipe($.plumber())
    .pipe($.pug({
      pretty: true,
    }))
    .pipe(gulp.dest('dist')) // output folder
    .pipe(browserSync.stream())
  // .pipe($.notify("Compile Pug Complete!"))
});
