const http = require('http');

const routes = require('./9.cleanRoute');

const server = http.createServer(routes.handler);

server.listen(3000);

