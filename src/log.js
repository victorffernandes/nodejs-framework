
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
        const cwd = process.cwd();
        console.log(msg);
        fs.appendFile(`${cwd}logs/logs.txt`, this.formatMessage(msg) + '\n', { flag: 'as' }, function (err) {
            if (err) throw err;
        });
    }
}

export default Log;