'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Log = function () {
    function Log() {
        _classCallCheck(this, Log);
    }

    _createClass(Log, [{
        key: 'formatMessage',
        value: function formatMessage(message) {
            var log = {
                timestamp: Date.now(),
                message: message
            };

            return JSON.stringify(log);
        }
    }, {
        key: 'debug',
        value: function debug(msg) {
            console.log(msg);
            _fs2.default.appendFile('logs/logs.txt', this.formatMessage(msg) + '\n', { flag: 'as' }, function (err) {
                if (err) throw err;
            });
        }
    }]);

    return Log;
}();

exports.default = Log;