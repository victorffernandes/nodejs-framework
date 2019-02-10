// carrega o arquivo de configuração conforme a variavel NODE_ENV.
var cwd = process.cwd();
const env = process.env.NODE_ENV || 'default';
const config = require(`${cwd}/api/config/env/${env}`);

config.env = env;

module.exports = config;
