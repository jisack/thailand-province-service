const model = require('./model');

module.exports = (server) => {
    server.route({
        method: 'GET',
        path: '/province',
        handler: (request, reply) => {
            return reply(model.getProvince)
        }
    });

    server.route({
        method: 'GET',
        path: '/amphur/{province_id}',
        handler: (request, reply) => {
            return reply(model.getAmphur(request.params.province_id))
        }
    });
};