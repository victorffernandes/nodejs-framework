'use strict';

var _Base2 = require('./lib/Base');

var _Base3 = _interopRequireDefault(_Base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Database = function (_Base) {
    _inherits(Database, _Base);

    function Database(type, connectionString, name, user, password) {
        _classCallCheck(this, Database);

        var _this = _possibleConstructorReturn(this, (Database.__proto__ || Object.getPrototypeOf(Database)).call(this));

        _this.user = user;
        _this.password = password;
        _this.name = name;
        _this.connectionString = connectionString;

        _this.auth = user && password ? {
            user: user,
            password: password
        } : undefined;
        return _this;
    }

    return Database;
}(_Base3.default);

module.exports = Database;