import _ from 'lodash';

const defaultSettings = {
  jwtSecret: "top-secret",
};

const envSettings = _.pickBy({
  jwtSecret: process.env.JWT_SECRET
});

const config = {
  ...defaultSettings,
  ...envSettings
};

export default config;
