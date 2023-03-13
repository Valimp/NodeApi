const http = require('http');
const app = require('./app')
const server = http.createServer(app);

server.listen(process.env.PORT, function() {
    console.log(`Listening on ${process.env.PORT} port 🔊`);
    console.log(`http://localhost:${process.env.PORT}`);
});