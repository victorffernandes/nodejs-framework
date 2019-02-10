import config from './config';
import MongoDb from './dbTypes/mongo';

class ConnectionFactory {
    constructor() {
        this.connectionsStrings = config.connections;
        if (!ConnectionFactory.connections) {
            ConnectionFactory.connections = this.connectionsStrings.map((conn) => {
                return this.instantiateConnectionType(conn.type, conn.connectionString, conn.alias, conn.user, conn.password);
            });
        }
    }

    instantiateConnectionType(type, connectionString, alias, user, password) {
        switch (type) {
            case 'mongo':
                return new MongoDb(type, connectionString, alias, user, password);
            default:
                throw new Error('Database selected not implemented');
        }
    }

    getConnection(alias) {
        if (!alias && ConnectionFactory.connections.length != 0)
            return ConnectionFactory.connections[0];

        const conn = ConnectionFactory.connections.find((con) => con.name === alias);
        return conn ? conn.getConnection() : new Error('No ' + alias + ' connection exists.');
    }
}

module.exports = new ConnectionFactory();