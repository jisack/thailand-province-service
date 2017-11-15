const knex = require('knex');
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname) + '/.env'});
const mysql_cofig = {
    client: 'mysql',
    connection: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        database: process.env.MYSQL_DB_NAME,
        port: process.env.MYSQL_PORT
    }
};
const mysqlDatabase = knex(mysql_cofig);
console.log(mysql_cofig)
module.exports = mysqlDatabase;