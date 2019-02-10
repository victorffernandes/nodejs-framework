
var restify = require('restify');
var middlewares = require('./middlewares');

class Server {
    constructor() {
        if (!Server.server) {
            this.server = restify.createServer();
        }
        this.configureServer();
        return this.server;
    }

    configureServer() {
        middlewares.forEach((middleware) => {
            this.server.use(middleware);
        });
    }
}
export default new Server();