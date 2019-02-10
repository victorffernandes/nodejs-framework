
import restify from 'restify';
import middlewares from './middlewares';
import router from './router';

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
        router.importRoutes();
    }
}
export default new Server();