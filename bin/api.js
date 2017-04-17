#!/usr/bin/env babel-node
import {} from 'dotenv/config';

import app from '../src/server';
import config from '../config';
const { server } = config;

app.listen(server.port, err => {
  if (err) {
    throw err;
  } else {
    console.log('Connected!');
    console.log('\tHOST: %s', server.host);
    console.log('\tPORT: %s', server.port);
  }
});
