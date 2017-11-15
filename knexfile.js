module.exports = {
    development: {
        migrations: {
            tableName: 'thailand_province'
        },
        seeds: {
            tableName: './seeds'
        },
        client: 'mysql',
        connection: {
            host: 'mysql_database',
            user: 'thailand_province',
            password: 'th_province',
            database: 'thailand_province',
            charset: 'utf8',
            port: '3306'            
        }
    }
};