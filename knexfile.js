require('dotenv').config({path: './.env'});
module.exports  = {
    development: {
        migrations: {
            tableName: 'thailand_province'
        },
        seeds: {
            tableName: './seeds'
        },
        client: 'mysql',
<<<<<<< e7c2e02aecf9b06b565971bc2451ed94a6255717
        connection: {
            host: 'mysql_database',
            user: 'thailand_province',
            password: 'th_province',
=======
        connections: {
            host: 'localhost',
            user: 'root',
            password: '',
>>>>>>> update knex and hapi version and set new struckture
            database: 'thailand_province',
            charset: 'utf8',
            port: '3306'            
        }
    },
    production: {
        migrations: {
            tableName: 'thailand_province'
        },
        seeds: {
            tableName: './seeds'
        },
        client: 'mysql',
        connection: {
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASS,
            database: process.env.MYSQL_DB_NAME,
            charset: 'utf8',
            port: process.env.MYSQL_PORT         
        }
    }
};