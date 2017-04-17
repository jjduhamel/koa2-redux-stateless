import _ from 'lodash';

const defaultSettings = {
  host: '127.0.0.1',
  port: 8000
};

const modeSettings = {
  test: {
    port: 8100
  }
};

const envSettings = _.pickBy({
  host: process.env.APP_HOSTNAME,
  port: process.env.APP_PORT
});

const config = {
  ...defaultSettings,
  ...modeSettings[process.env.NODE_ENV],
  ...envSettings
};

export default config;
