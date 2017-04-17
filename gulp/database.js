import gulp from 'gulp';
import shell from 'gulp-shell';

gulp.task('db:sync', shell.task('bin/sync-database.js'));
