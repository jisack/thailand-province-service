'use strict'
const hapi = require('hapi');
<<<<<<< e7c2e02aecf9b06b565971bc2451ed94a6255717:index.js
=======
const path = require('path');
require('dotenv').config({
    path: path.join(__dirname, '../.env')
})

>>>>>>> update knex and hapi version and set new struckture:src/index.js
const appRouter = require('./src/router');
const server = new hapi.Server();

server.connection({
    host: 'localhost',
    port: 7000,
    routes: {
        cors: true
    }
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