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

server.post('/videos', () => {
    return 'Hello World!';
});

server.get('/videos', () => {
    return 'Hello Yurika';
});

server.put('/videos/:id', () => {
    return 'Hello Node.js';
});

server.put('/videos/:id', () => {
    return 'Hello Node.js';
});

server.delete('/videos/:id', () => {
    return 'Hello Node.js';
});

server.listen({
    port: 3333,
});