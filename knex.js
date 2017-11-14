const knex = require('knex')
const mysqlDatabase = knex({
    client: 'mysql',
    connection: {
        host: 'mysql_database',
        user: 'thailand_province',
        password: 'th_province',
        database: 'thailand_province'
    }
});
module.exports = mysqlDatabase;