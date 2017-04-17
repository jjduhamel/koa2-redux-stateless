//import { default } from 'dotenv/config';

import gulp from 'gulp';
import shell from 'gulp-shell';

import './gulp';

gulp.task('default', shell.task('echo FIXME'));

gulp.task('bootstrap', shell.task('echo FIXME'));
gulp.task('build', [ 'client:build' ]);
gulp.task('dev', [ 'api:dev', 'client:dev' ]);
