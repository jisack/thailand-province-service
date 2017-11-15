'use strict'
const hapi = require('hapi');
const appRouter = require('./src/router');
require('dotenv').config({path: './.env'});

const server = new hapi.Server();

server.connection({
    host: 'localhost',
    port: 7000
});

//Route
server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        return reply('<h1>Welcome to Thailand Province and Amphur Service</h>')
    }
});

appRouter(server);

//Start the Server
server.start((err) => {
    if (err) throw err;
    console.log('Server running at:', server.info.uri)
});