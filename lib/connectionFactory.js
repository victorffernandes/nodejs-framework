'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _mongo = require('./dbTypes/mongo');

var _mongo2 = _interopRequireDefault(_mongo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConnectionFactory = function () {
    function ConnectionFactory() {
        var _this = this;

        _classCallCheck(this, ConnectionFactory);

        this.connectionsStrings = _config2.default.connections;
        if (!ConnectionFactory.connections) {
            ConnectionFactory.connections = this.connectionsStrings.map(function (conn) {
                return _this.instantiateConnectionType(conn.type, conn.connectionString, conn.alias, conn.user, conn.password);
            });
        }
    }

    _createClass(ConnectionFactory, [{
        key: 'instantiateConnectionType',
        value: function instantiateConnectionType(type, connectionString, alias, user, password) {
            switch (type) {
                case 'mongo':
                    return new _mongo2.default(type, connectionString, alias, user, password);
                default:
                    throw new Error('Database selected not implemented');
            }
        }
    }, {
        key: 'getConnection',
        value: function getConnection(alias) {
            if (!alias && ConnectionFactory.connections.length != 0) return ConnectionFactory.connections[0];

            var conn = ConnectionFactory.connections.find(function (con) {
                return con.name === alias;
            });
            return conn ? conn.getConnection() : new Error('No ' + alias + ' connection exists.');
        }
    }]);

    return ConnectionFactory;
}();

module.exports = new ConnectionFactory();