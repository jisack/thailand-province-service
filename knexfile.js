module.exports = {
    development: {
        migrations: {tableName: 'thailand_province'},
        seeds: {tableName: './seeds'},
        client: 'mysql',
        connections: {
            host: 'database',
            user: 'thailand_province',
            password: 'th_province',
            database: 'thailand_province',
            charset: 'utf8'
        }
    }
}