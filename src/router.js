const app = require('./app');
module.exports = (server) => {
    server.route({
        method: 'GET',
        path: '/province',
        handler: (request, reply) => {
            return reply('Province')
        }
    });

    server.route({
        method: 'GET',
        path: '/amphur/{province_id}',
        handler: (request, reply) => {
            return reply('Amphur' + request.params.province_id)
        }
    });
}