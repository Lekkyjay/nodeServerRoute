const http = require('http');
const route = require('./route');
const port = 8000;

http.createServer(route.handleRequest).listen(port, ()=> {
  console.log('Server started on port '+port);
});