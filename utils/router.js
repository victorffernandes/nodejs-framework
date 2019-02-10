var glob = require('glob');

class Router {
    importRoutes(){
        const cwd = process.cwd();
        glob("./api/modules/**/route.js", function(er, files) {
            files.forEach((rout) => {
                const path = cwd +rout.substring(1, rout.length)
                require(path);
            });
        });
    }
}

module.exports = new Router();