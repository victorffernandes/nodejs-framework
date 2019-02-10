'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

var _Base2 = require('./lib/Base');

var _Base3 = _interopRequireDefault(_Base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Router = function (_Base) {
    _inherits(Router, _Base);

    function Router() {
        _classCallCheck(this, Router);

        return _possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).call(this));
    }

    _createClass(Router, [{
        key: 'importRoutes',
        value: function importRoutes() {
            var _this2 = this;

            var cwd = process.cwd();

            (0, _glob2.default)("./api/modules/**/route.js", function (er, files) {
                files.forEach(function (rout) {
                    var path = cwd + rout.substring(1, rout.length);
                    _this2.log.debug('Imported route specified in ' + path);
                    require(path);
                });
            });
        }
    }]);

    return Router;
}(_Base3.default);

exports.default = new Router();