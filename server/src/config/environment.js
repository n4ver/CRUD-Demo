const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

let envPath;

const NODE_ENV = process.env.NODE_ENV;

const environment = {
    /* General Information */
    NODE_ENV,
    TIME_ZONE: process.env.TIME_ZONE,
    APP_PORT: process.env.APP_PORT || 8081,
    /* Database Magic */
    DB: {
        DB_NAME: process.env.DB_NAME || 'complaintbase',
        DB_USER: process.env.DB_USER || 'complaintbase', 
        DB_PASSWORD: process.env.DB_PASS || 'complaintbase',
        OPTIONS: {
            DIALECT: process.env.DIALECT || 'mysql', // change to mysql maybe maybe
            HOST: process.env.HOST || 'localhost',
            STORAGE: path.resolve(__dirname, '../../complaintbase.sqlite'),
            DB_PORT: process.env.DB_PORT || 8082,
        },
        AUTENTICATION: {
            jwtSecret: process.env.JWT_SECRET || 'secret'
        }
    }
};

module.exports = environment;