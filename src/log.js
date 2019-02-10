
import fs from 'fs';

class Log {
    formatMessage(message) {
        const log = {
            timestamp: Date.now(),
            message,
        }

        return JSON.stringify(log);
    }

    debug(msg) {
        console.log(msg);
        fs.appendFile(`logs/logs.txt`, this.formatMessage(msg) + '\n', { flag: 'as' }, function (err) {
            if (err) throw err;
        });
    }
}

export default Log;