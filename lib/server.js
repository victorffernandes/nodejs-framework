'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _restify = require('restify');

var _restify2 = _interopRequireDefault(_restify);

var _middlewares = require('./middlewares');

var _middlewares2 = _interopRequireDefault(_middlewares);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Server = function () {
    function Server() {
        _classCallCheck(this, Server);

        if (!Server.server) {
            this.server = _restify2.default.createServer();
        }
        this.configureServer();
        return this.server;
    }

    _createClass(Server, [{
        key: 'configureServer',
        value: function configureServer() {
            var _this = this;

            _middlewares2.default.forEach(function (middleware) {
                _this.server.use(middleware);
            });
            _router2.default.importRoutes();
        }
    }]);

    return Server;
}();

exports.default = new Server();