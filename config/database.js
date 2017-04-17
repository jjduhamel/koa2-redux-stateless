import _ from 'lodash';

const defaultSettings = {
  dialect: 'sqlite',
  storage: 'development.sqlite',
  logging: false
};

const modeSettings = {
  test: {
    dialect: 'sqlite',
    storage: 'test.sqlite'
  },
  production: {
    dialect: 'postgres',
    username: 'postgres',
    schema: 'sports-stats',
    host: '127.0.0.1',
    port: 5432
  }
};

const envSettings = _.pickBy({
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  schema: process.env.DB_SCHEMA,
  host: process.env.DB_HOSTNAME,
  port: process.env.DB_PORT
});

const config = {
  ...defaultSettings,
  ...modeSettings[process.env.NODE_ENV],
  ...envSettings
};

export default config;
