import gulp from 'gulp';
import shell from 'gulp-shell';

gulp.task('client:build', shell.task('webpack --config config/webpack.js'));
gulp.task('client:dev', shell.task('webpack-dev-server --config config/webpack.js'));
