const gulp = require('gulp');
const babel = require('gulp-babel');
const jest = require('gulp-jest').default;
const del = require('del');
const eslint = require('gulp-eslint');

gulp.task('default', ['lint', 'test', 'build']);

gulp.task('build', function () {
  return gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('test', function () {
  return gulp.src('test')
    .pipe(jest({
      'preprocessorIgnorePatterns': [
        '<rootDir>/dist/', '<rootDir>/node_modules/'
      ],
      'automock': false
    }));
});

gulp.task('lint', () => {
  return gulp.src(['**/*.js', '!node_modules/**', '!dist/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('clean', ['clean:dist'], function () {
  return del(['node_modules']);
});

gulp.task('clean:dist', function () {
  return del('dist');
});
