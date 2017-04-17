import gulp from 'gulp';
import shell from 'gulp-shell';

gulp.task('test', [ 'test:client', 'test:server' ]);
gulp.task('test:client', shell.task('echo FIXME'));
gulp.task('test:server', shell.task('echo FIXME'));
