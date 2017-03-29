'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const concatCss = require('gulp-concat-css');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const spritesmith = require('gulp.spritesmith');

gulp.task('browserSync', () =>
    browserSync({
      server: {
        baseDir: './'
      },
    })
);

gulp.task('sass', () =>
  gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
);

gulp.task('html', () =>
  gulp.src('index.html')
  .pipe(browserSync.reload({
    stream:true
  }))
);

gulp.task('concatJs', () =>
   gulp.src(['./src/js/jquery.jcarousel.min.js', './src/js/jcarousel.responsive.js', './src/js/script.js'])
    .pipe(concat('script.main.js'))
    .pipe(gulp.dest('./js'))
);


gulp.task('concatCss', () =>
   gulp.src('./src/css/*.css')
    .pipe(concatCss('style.css'))
    .pipe(gulp.dest('./css'))
);


gulp.task('imgmin', () =>
    gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./img'))
);

gulp.task('babel', () => {
    return gulp.src('src/js/script.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./js'));
});

gulp.task('sprite1', () => {
  var spriteData = gulp.src('src/img/sprite/*.png').pipe(spritesmith({
    imgName: '../img/sprite.png',
    cssName: 'sprite.scss'
  }));
  return spriteData.pipe(gulp.dest('./img/'));
});

gulp.task('sprite', () => {
  var spriteData = gulp.src('src/sprite/*.png')
    .pipe(spritesmith({
      retinaSrcFilter: 'src/sprite/*-2x.png',
      imgName: '../img/sprite.png',
      retinaImgName: '../img/sprite-2x.png',
      cssName: 'sprites.scss'
    }));
  spriteData.img.pipe(gulp.dest('./img'));
  spriteData.css.pipe(gulp.dest('./src/sass'));
});


gulp.task('sass:watch', ['browserSync', 'sass', 'html'], () =>
{  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch('index.html', ['html'])
});
gulp.task('concat', ['concatJs', 'concatCss']);
