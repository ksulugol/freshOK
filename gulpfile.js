const { src, dest, watch, parallel, series } = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const del = require('del');
const browsersync = require('browser-sync').create();
const svgSprite = require('gulp-svg-sprite');


function browserSync() {
  browsersync.init({
    server: {
      baseDir: 'dist/'
    },
    notify: false
  })
}

function html() {
  return src('app/**/*.html')
    .pipe(dest('dist/'))
    .pipe(browsersync.stream())
}

function styles() {
  return src('app/scss/style.scss')
    .pipe(scss({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
      grid: true
    }))
    .pipe(concat('style.min.css'))
    .pipe(dest('dist/css'))
    .pipe(browsersync.stream())
}

function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/slick-carousel/slick/slick.js',
    'app/js/main.js',
    'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
    'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
    'node_modules/rateyo/jquery.rateyo.js',
    'node_modules/mixitup/dist/mixitup.js'
  ])
  .pipe(concat('main.min.js'))  
  .pipe(uglify())
  .pipe(dest('dist/js'))
  .pipe(browsersync.stream())
}

function images() {
  return src(['app/images/**/*.*', '!app/images/icons/*.svg'])
  .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({ quality: 75, progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 })
  ]))
  .pipe(dest('dist/images'))
}

function svgSprites() {
  return src('app/images/icons/*.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: "../sprite.svg"
        }
      },
      shape: {
        transform: [
          {
            svgo: {
              plugins: [
                {
                  removeAttrs: {
                    attrs: ['class', 'data-name', 'fill', 'stroke.*']
                  }
                },
                { removeXMLNS: true },
              ]
            }
          }
        ]
      }
    }))
    .pipe(dest('dist/images'))
}

function fonts() {
  return src('app/fonts/**/*.*') 
    .pipe(dest('dist/fonts'))
}

function clear() {
  return del('dist/')
}

function watching() {
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/js/**/*.js'], scripts);
  watch(['app/**/*.html'], html);
  watch(['app/images/**/*.*', '!app/images/**/*.svg'], images);
  watch(['app/images/**/*.svg'], svgSprites);
  watch(['app/fonts/**/*.*'], fonts);
} 


exports.browserSync = browserSync;
exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images; 
exports.svgSprites = svgSprites;
exports.fonts = fonts;
exports.clear = clear;
exports.watching = watching;

exports.default = series(clear, html, styles, fonts, scripts, images, svgSprites, parallel (browserSync, svgSprites, watching));