var body_parser = require('body-parser');
var restify = require('restify-plugins');

module.exports = [
    require('body-parser').json(),
    require('body-parser').urlencoded({extended: false}),
    restify.queryParser()
];