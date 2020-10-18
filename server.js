require('dotenv').config({ path: '.env' });
const http = require('http');
const app = require('./app');

const port = process.env.PORT || 4000;

const server = http.createServer(app);

server.listen(port, () => {
	console.log(`App running at http://127.0.0.1:${port}`);
});
