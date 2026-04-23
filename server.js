// import { createServer} from 'node:http';

// const server = createServer((request, response) => {
//    response.write('Hello World!');
// return response.end();
// })

// server.listen(3333); // http://localhost:3333

import { fastify } from 'fastify';
import { DatabaseMemory } from './database-memory.js';

const server = fastify();

// GET, POST, PUT, PATCH, DELETE

// Route Parameter

server.get('/', () => {
    return 'Hello World!';
});

server.get('/hello', () => {
    return 'Hello Yurika';
});

server.get('/node', () => {
    return 'Hello Node.js';
});

server.listen({
    port: 3333,
});