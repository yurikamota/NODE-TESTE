import { createServer} from 'node:http';

const server = createServer(() => {
    console.log('Server is running');
})

server.listen(3333); // http://localhost:3333