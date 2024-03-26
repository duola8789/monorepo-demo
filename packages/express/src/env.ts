import * as path from 'path';
const dotenv = require('dotenv');

const { mode } = process.env;

const configFile = mode ? `.${mode}.env` : '.env';

const { error } = dotenv.config({
  path: path.resolve(__dirname, '../env', configFile),
});

if (error) {
  throw error;
}

export const parseEnv = <T extends number | boolean | string>(key: string, defaultValue?: T): T | undefined => {
  const value = process.env[key];

  if (typeof value === 'undefined') {
    return defaultValue;
  }

  const retType = typeof defaultValue;
  if (retType === 'number') {
    return parseInt(value, 10) as T;
  } else if (retType === 'boolean') {
    return (value === 'true') as T;
  } else {
    return value as T;
  }
};

export const ENV_CONFIG = {
  serverPort: parseEnv<number>('port', 8181),
  proxyServer: parseEnv<string>('proxyServer'),
};

export default ENV_CONFIG;
