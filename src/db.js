import Base from './lib/Base';

class Database extends Base {
    constructor(type, connectionString, name, user, password) {
        super();
        this.user = user;
        this.password = password;
        this.name = name;
        this.connectionString = connectionString;

        this.auth = (user && password) ? {
            user,
            password
        } : undefined;
    }
}

module.exports = Database;