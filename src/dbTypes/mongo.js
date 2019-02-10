import Database from '../db';
import mongoose from 'mongoose';

class Mongo extends Database {
    constructor(type, connectionString, name, user, password){
        super(type, connectionString, name, user, password);
        this.connection = this.connect();
        this.initializeListeners();
    }

    connect() {
        return mongoose.createConnection(this.connectionString,
            {
                useNewUrlParser: true,
                auth: this.auth,
                server: {
                    auto_reconnect: true
                }
            });
    }

    initializeListeners() {
        this.connection.on('connecting', (() => {
            this.log.debug('connecting to MongoDB...');
        }).bind(this));

        this.connection.on('connected', (() => {
            this.log.debug('MongoDB connected!');
        }).bind(this));

        this.connection.once('open', (() => {
            this.log.debug('MongoDB connection opened!');
        }).bind(this));
        this.connection.on('reconnected', (() => {
            this.log.debug('MongoDB reconnected!');
        }).bind(this));
        this.connection.on('disconnected', (() => {
            this.log.debug('MongoDB disconnected!');
            this.connect();
        }).bind(this));
    }

    getConnection() {
        return this.connection;
    }
}

export default Mongo;