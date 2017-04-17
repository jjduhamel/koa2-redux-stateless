import gulp from 'gulp';
import shell from 'gulp-shell';

gulp.task('api:dev', shell.task('nodemon --watch ./src --ext js,json,ejs --exec babel-node bin/api.js'));
