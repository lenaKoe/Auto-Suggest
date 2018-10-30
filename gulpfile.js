
//REQUIRED MODULES
const gulp = require('gulp'),
      sass = require('gulp-sass'),
      browserSync = require('browser-sync').create();
      babelify = require('babelify'),
      browserify = require ('browserify'),
      source = require ('vinyl-source-stream'),
      buffer = require ('vinyl-buffer');
    

//GULP TASKS
gulp.task('sass', function() {
  return gulp.src('src/styles/main.scss') 
    .pipe(sass()) 
    .pipe (gulp.dest('dist/styles')) 
    .pipe(browserSync.reload({
      stream:true
    }))
});

gulp.task('browserSync', () =>
  browserSync.init({
    server: {
      baseDir:'./'
    },
  })
);

gulp.task("es6", () =>  {
  browserify('./src/scripts/app.js')
    .transform("babelify", {
      presets: ["es2015"],
      plugins: ["transform-object-rest-spread"]
    })
    .bundle()
    .pipe(source("app.js"))
    .pipe(buffer())
    .pipe(gulp.dest("./dist"));
});

//WATCH
gulp.task('watch', () => {
  gulp.watch('src/styles/*.scss', ['sass']);
  gulp.watch('src/scripts/*.js', ['es6']);
  gulp.watch('index.html', browserSync.reload);
});

//DEFAULT 
gulp.task('default', ['sass', 'es6', 'browserSync', 'watch']);



// //REQUIRED MODULES
// const gulp = require('gulp'),
//       sass = require('gulp-sass'),
//       browserSync = require('browser-sync').create(),
//       glob = require('glob'),
//       babelify = require('babelify'),
//       browserify = require ('browserify'),
//       source = require ('vinyl-source-stream'),
//       buffer = require ('vinyl-buffer');
    

// //GULP TASKS
// gulp.task('sass', function() {
//   return gulp.src('src/styles/index.scss') 
//     .pipe(sass()) 
//     .pipe (gulp.dest('build/css')) 
//     .pipe(browserSync.reload({
//       stream:true
//     }))
// });

// gulp.task('browserSync', () =>
//   browserSync.init({
//     server: {
//       baseDir:'./'
//     },
//   })
// );

// gulp.task("es6", () =>  {
//   browserify(glob.sync('/src/scripts/*.js'))
//     .transform("babelify", {
//       presets: ["es2015"]
//     })
//     .bundle()
//     .pipe(source("app.js"))
//     .pipe(buffer())
//     .pipe(gulp.dest("./dist"));
// });


// //WATCH
// gulp.task('watch', () => {
//   gulp.watch('src/styles/*.scss', ['sass']);
//   gulp.watch('src/es6/*.js', ['es6']);
//   gulp.watch('index.html', browserSync.reload);
// });


// //DEFAULT 
// gulp.task('default', ['sass', 'es6', 'browserSync', 'watch']);
// gulp.task('build', ['sass', 'es6']);


// // //REQUIRED MODULES
// // const gulp = require('gulp'),
// //       sass = require('gulp-sass'),
// //       browserSync = require('browser-sync').create(),
// //       glob = require('glob'),
// //       babelify = require('babelify'),
// //       browserify = require ('browserify'),
// //       source = require ('vinyl-source-stream'),
// //       buffer = require ('vinyl-buffer');
    
// // //GULP TASKS
// // gulp.task('sass', function() {
// //   return gulp.src('src/styles/main.scss') 
// //     .pipe(sass()) 
// //     .pipe (gulp.dest('dist/styles')) 
// //     .pipe(browserSync.reload({
// //       stream:true
// //     }))
// // });

// // gulp.task('browserSync', () =>
// //   browserSync.init({
// //     server: {
// //       baseDir:'./'
// //     },
// //   })
// // );

// // gulp.task("es6", () =>  {
// //   browserify(glob.sync('/src/scripts/*.js'))
// //     .transform("babelify", {
// //       presets: ["env"],
// //     })
// //     .bundle()
// //     .pipe(source("app.js"))
// //     .pipe(buffer())
// //     .pipe(gulp.dest("./dist"));
// // });

// // //WATCH
// // gulp.task('watch', () => {
// //   gulp.watch('src/styles/*.scss', ['sass']);
// //   gulp.watch('src/scripts/*.js', ['es6']);
// //   gulp.watch('index.html', browserSync.reload);
// // });

// // //DEFAULT 
// // gulp.task('default', ['sass', 'es6', 'browserSync', 'watch']);
