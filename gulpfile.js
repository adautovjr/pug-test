const gulp = require('gulp')
const pug = require('gulp-pug')

gulp.task('pug', () => {
  return gulp.src('src/**/*.pug')
            .pipe(pug({
              pretty: true,
              locals: {
                require: require,
                debug: true
              }
            }))
            .pipe(gulp.dest('build/'))
})

gulp.task('default', () => {
  gulp.watch('src/**/*.pug', gulp.series('pug'))
})