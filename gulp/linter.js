import gulp from 'gulp';
import shell from 'gulp-shell';

gulp.task('lint', [ 'lint:admin', 'lint:client', 'lint:server' ]);
gulp.task('lint:admin', shell.task('eslint --color admin/'));
gulp.task('lint:client', shell.task('eslint --color app/'));
gulp.task('lint:server', shell.task('eslint --color src/'));
