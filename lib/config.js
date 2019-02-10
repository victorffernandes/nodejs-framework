'use strict';

// carrega o arquivo de configuração conforme a variavel NODE_ENV.
var cwd = process.cwd();
var env = process.env.NODE_ENV || 'default';
var config = require(cwd + '/api/config/env/' + env);

config.env = env;

module.exports = config;