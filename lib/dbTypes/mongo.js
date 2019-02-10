'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mongo = function (_Database) {
    _inherits(Mongo, _Database);

    function Mongo(type, connectionString, name, user, password) {
        _classCallCheck(this, Mongo);

        var _this = _possibleConstructorReturn(this, (Mongo.__proto__ || Object.getPrototypeOf(Mongo)).call(this, type, connectionString, name, user, password));

        _this.connection = _this.connect();
        _this.initializeListeners();
        return _this;
    }

    _createClass(Mongo, [{
        key: 'connect',
        value: function connect() {
            return _mongoose2.default.createConnection(this.connectionString, {
                useNewUrlParser: true,
                auth: this.auth,
                server: {
                    auto_reconnect: true
                }
            });
        }
    }, {
        key: 'initializeListeners',
        value: function initializeListeners() {
            var _this2 = this;

            this.connection.on('connecting', function () {
                _this2.log.debug('connecting to MongoDB...');
            }.bind(this));

            this.connection.on('connected', function () {
                _this2.log.debug('MongoDB connected!');
            }.bind(this));

            this.connection.once('open', function () {
                _this2.log.debug('MongoDB connection opened!');
            }.bind(this));
            this.connection.on('reconnected', function () {
                _this2.log.debug('MongoDB reconnected!');
            }.bind(this));
            this.connection.on('disconnected', function () {
                _this2.log.debug('MongoDB disconnected!');
                _this2.connect();
            }.bind(this));
        }
    }, {
        key: 'getConnection',
        value: function getConnection() {
            return this.connection;
        }
    }]);

    return Mongo;
}(_db2.default);

exports.default = Mongo;