import glob from 'glob';
import Base from './lib/Base';

class Router extends Base {
    constructor(){
        super();
    }
    
    importRoutes() {
        const cwd = process.cwd();

        glob("./api/modules/**/route.js", (er, files) => {
            files.forEach((rout) => {
                const path = cwd + rout.substring(1, rout.length);
                this.log.debug(`Imported route specified in ${path}`)
                require(path);
            });
        });
    }
}

export default new Router();