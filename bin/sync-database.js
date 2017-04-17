#!/usr/bin/env babel-node

import rl from 'readline-sync';

import models from '../src/models';
import db from '../src/database';

let choice;
choice = rl.keyInYN('WARNING: This will permanently delete all existing data. Continue? ');
if (!choice) {
  console.log('Better safe than sorry. Aborting...');
  process.exit(0);
}

if ('production' === process.env.NODE_ENV) {
  console.log('You can\'t sync the database in production mode!');
  console.log('*tisk* *tisk* *tisk*');
  process.exit(1);
}

db.sync({ force: true })
.then(() => {
  console.log('Done!');
  process.exit(0);
});
